<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Forum;
use App\Models\Post;
use Inertia\Inertia;
use App\Http\Resources\PostShowResource;

class FrontendPostController extends Controller
{
    public function show($forum_slug, $slug){

        $community = Forum::where('slug', $forum_slug)->first();
        $post = new PostShowResource(Post::with(['comments', 'replies', 'votes' => function ($query){
            $query->where('user_id', auth()->id());
        }])->where('slug', $slug)->first());

        return Inertia::render('Forums/Posts/Show', compact('community', 'post'));
    }
}
