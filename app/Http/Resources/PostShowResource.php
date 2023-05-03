<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostShowResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'description' => $this->description,
            'username' => $this->user->username,
            'slug' => $this->slug,
            'url' => $this->url,
            'owner' => $this->user->id === auth()->id(),
            'comments' => CommentResource::collection($this->whenLoaded('comments')),
            'replies' => ReplyResource::collection($this->whenLoaded('replies')),
            'upvotes' => $this->upvotes,
            'votes' => $this->whenLoaded('votes')
        ];
    }
}
