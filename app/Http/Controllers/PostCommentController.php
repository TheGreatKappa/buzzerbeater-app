<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Request;
use App\Models\Post;

class PostCommentController extends Controller
{
    public function store($community_slug, Post $post){
        $post->comments()->create([
            'user_id' => auth()->id(),
            'content' => Request::input('content'),
        ]);

        return back();
    }

    public function reply($community_slug, Post $post, $comment_id){
        $post->comments()->create([
            'user_id' => auth()->id(),
            'parent_id' => $comment_id,
            'content' => Request::input('content'),
        ]);

        return back();
    }

    public function destroy($community_slug, Post $post, $comment_id){
        $comment = $post->comments()->findOrFail($comment_id);

        $this->authorize('delete', $comment);

        $comment->delete();

        return back();
    }
}
