<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Forum;
use Inertia\Inertia;

class CommunityController extends Controller
{
    public function show($slug){
        $community = Forum::where('slug', $slug)->first();
        
        return Inertia::render('Communities/Show', compact('community'));
    }
}
