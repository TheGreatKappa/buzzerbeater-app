<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostStoreRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Forum;
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

        return to_route('forums.index');
    }
}
