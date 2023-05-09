<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Forum;
use App\Models\Post;
use Inertia\Inertia;
use App\Http\Resources\PostShowResource;
use App\Http\Resources\PostResource;
use Illuminate\Support\Facades\Auth;

class FrontendPostController extends Controller
{
    public function show($forum_slug, $slug){

        $community = Forum::where('slug', $forum_slug)->first();
        $community_post = Post::with(['comments', 'replies', 'votes' => function ($query){
            $query->where('user_id', auth()->id());
        }])->where('slug', $slug)->first();

        $post = new PostShowResource($community_post);

        $latest = PostResource::collection(Post::with(['user', 'forum'])->orderBy('upvotes', 'desc')->take(5)->get());

        $can_update = Auth::user()->can('update', $community_post);
        $can_delete = Auth::user()->can('delete', $community_post);
        return Inertia::render('Forums/Posts/Show', compact('community', 'post', 'latest', 'can_update', 'can_delete'));
    }
}
