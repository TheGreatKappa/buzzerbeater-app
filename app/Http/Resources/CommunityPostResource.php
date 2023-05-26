<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CommunityPostResource extends JsonResource
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
            'upvotes' => $this->upvotes,
            'votes' => $this->whenLoaded('votes'),
            'forum_slug' => $this->forum->slug,
            'forum_name' => $this->forum->name,
            'comments' => CommentResource::collection($this->whenLoaded('comments'))->count(),
            'created_at' => $this->created_at->locale('hu')->diffForHumans(),
        ];
    }
}
