<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\CommunityPostResource;
use App\Http\Resources\ForumResource;
use App\Models\Post;
use App\Models\Forum;

class HomepageController extends Controller
{
    public function show(){

        $posts = CommunityPostResource::collection(Post::with(['user', 'forum', 'votes', 'comments' => function ($query){
            $query->where('user_id', auth()->id());
        }])->orderBy('upvotes', 'desc')->take(10)->get());

        $forums = ForumResource::collection(Forum::withCount('posts')->orderBy('posts_count', 'desc')->take(5)->get());

        return Inertia::render('Welcome', compact('posts', 'forums'));
    }
}
