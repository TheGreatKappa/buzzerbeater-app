<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\Vote;

class VotingController extends Controller
{
    public function upvote(Post $post){

        $isVoted = Vote::where('post_id', $post->id)->where('user_id', auth()->id())->first();

        if(!is_null($isVoted)){
            if($isVoted->vote === -1){
                $isVoted->update(['vote' => 1]);
                $post->increment('upvotes', 2);
                return redirect()->back();
            } elseif($isVoted->vote === 1){
                return redirect()->back();
            }
        } else {
            Vote::create([
                'user_id' => auth()->id(),
                'post_id' => $post->id,
                'vote' => 1
            ]);
            $post->increment('upvotes', 1);
            return redirect()->back();
        }
    }

    public function downvote(Post $post){
            
        $isVoted = Vote::where('user_id', auth()->id())->where('post_id', $post->id)->first();

        if(!is_null($isVoted)){
            if($isVoted->vote === 1){
                $isVoted->update(['vote' => -1]);
                $post->decrement('upvotes', 2);
                return redirect()->back();
            } elseif($isVoted->vote === -1){
                return redirect()->back();
            }
        } else {
            Vote::create([
                'user_id' => auth()->id(),
                'post_id' => $post->id,
                'vote' => -1
            ]);
            $post->decrement('upvotes', 1);
            return redirect()->back();
        }
    }
}
