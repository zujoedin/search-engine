<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContentRating extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'rating',
        'content_id'
    ];

    public function content()
    {
        return $this->hasMany(Content::class);
    }
}
