<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\CommunityPostResource;
use App\Models\Post;

class HomepageController extends Controller
{
    public function show(){

        $posts = CommunityPostResource::collection(Post::with(['user', 'forum', 'votes', 'comments' => function ($query){
            $query->where('user_id', auth()->id());
        }])->orderBy('upvotes', 'desc')->take(10)->get());

        return Inertia::render('Welcome', compact('posts'));
    }
}
