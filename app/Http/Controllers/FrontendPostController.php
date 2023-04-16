<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Forum;
use App\Models\Post;
use Inertia\Inertia;

class FrontendPostController extends Controller
{
    public function show($forum_slug, $slug){
        //dd($forum_slug, $slug);

        $community = Forum::where('slug', $forum_slug)->first();
        $post = Post::where('slug', $slug)->first();

        return Inertia::render('Forums/Posts/Show', compact('community', 'post'));
    }
}
