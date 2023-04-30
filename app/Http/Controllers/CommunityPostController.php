<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostStoreRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Forum;
use App\Models\Post;
use Inertia\Inertia;

class CommunityPostController extends Controller
{
    public function create(Forum $forum){
        return Inertia::render('Forums/Posts/Create', compact('forum'));
    }

    public function store(PostStoreRequest $request, Forum $forum){
        $forum->posts()->create([
            'user_id' => auth()->id(),
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'url' => $request->input('url'),
        ]);

        return Redirect::route('community.show', $forum->slug);
    }

    public function edit(Forum $forum, Post $post){
        $this -> authorize('update', $post);

        return Inertia::render('Forums/Posts/Edit', compact('forum', 'post'));
    }

    public function update(PostStoreRequest $request, Forum $forum, Post $post){
        $this -> authorize('update', $post);

        $post->update($request->validated());

        return Redirect::route('community.show', [$forum->slug, $post->slug]);
    }

    public function destroy(Forum $forum, Post $post){
        $this -> authorize('delete', $post);
        
        $post->delete();

        return Redirect::route('community.show', $forum->slug);
    }
}
