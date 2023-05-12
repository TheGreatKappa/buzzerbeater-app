<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ReplyResource extends JsonResource
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
            'username' => $this->user->username,
            'comment' => $this->content,
            'id' => $this->id,
            'parent_id' => $this->parent_id,
            'owner' => $this->user->id === auth()->id(),
        ];
    }
}
