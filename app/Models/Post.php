<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

use Cviebrock\EloquentSluggable\Sluggable;

class Post extends Model
{
    use HasFactory, SoftDeletes, Sluggable;

    protected $fillable = [
        'user_id',
        'forum_id',
        'title',
        'description',
        'slug',
        'url',
    ];

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }

    function user()
    {
        return $this->belongsTo(User::class);
    }
}
