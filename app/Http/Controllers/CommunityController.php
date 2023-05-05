<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Forum;
use Inertia\Inertia;
use App\Http\Resources\CommunityPostResource;

class CommunityController extends Controller
{
    public function show($slug){
        $community = Forum::where('slug', $slug)->firstOrFail();
        $posts = CommunityPostResource::collection($community->posts()->with(['user', 'votes', 'comments' => function ($query){
            $query->where('user_id', auth()->id());
        }])->paginate(12));
        
        return Inertia::render('Communities/Show', compact('community', 'posts'));
    }
}
