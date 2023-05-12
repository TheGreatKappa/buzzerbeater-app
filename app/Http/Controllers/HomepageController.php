<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\CommunityPostResource;
use App\Http\Resources\ForumResource;
use App\Models\Post;
use App\Models\Forum;
use App\Models\User;

class HomepageController extends Controller
{
    public function show(){

        $posts = CommunityPostResource::collection(Post::with(['user', 'forum', 'votes' => function ($query){
            $query->where('user_id', auth()->id());
        }, 'comments'])->orderBy('upvotes', 'desc')->take(10)->get());

        $forums = ForumResource::collection(Forum::withCount('posts')->orderBy('posts_count', 'desc')->take(10)->get());

        $recommended = ForumResource::collection(Forum::where(function($query) {
            if (auth()->check() && auth()->user()->favorite_team && auth()->user()->favorite_player) {
                $query->where('name', 'like', '%'.auth()->user()->favorite_team.'%')
                      ->orWhere('name', 'like', '%'.auth()->user()->favorite_player.'%');
            } elseif (auth()->check() && auth()->user()->favorite_team) {
                $query->where('name', 'like', '%'.auth()->user()->favorite_team.'%');
            } elseif (auth()->check() && auth()->user()->favorite_player) {
                $query->where('name', 'like', '%'.auth()->user()->favorite_player.'%');
            }
        })
        ->where('user_id', '<>', auth()->id())
        ->withCount('posts')
        ->orderBy('posts_count', 'desc')
        ->take(5)
        ->get());
        

        return Inertia::render('Welcome', compact('posts', 'forums', 'recommended'));
    }
}
