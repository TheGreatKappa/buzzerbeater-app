<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Forum;
use Inertia\Inertia;
use App\Http\Resources\CommunityPostResource;
use App\Http\Resources\ForumResource;

class CommunityController extends Controller
{
    public function show($slug){
        $community = Forum::where('slug', $slug)->firstOrFail();
        $posts = CommunityPostResource::collection($community->posts()->with(['user', 'votes' => function ($query){
            $query->where('user_id', auth()->id());
        }, 'comments'])->paginate(12));

        $latest = ForumResource::collection(Forum::withCount('posts')->orderBy('posts_count', 'desc')->take(5)->get());
        
        return Inertia::render('Communities/Show', compact('community', 'posts', 'latest'));
    }
}
