<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Content extends Model
{
    use HasFactory;

    protected $casts = [
        'release_date'  => 'date:d/m/Y',
    ];

    public function ratings()
    {
        return $this->hasMany(ContentRating::class,'content_id');
    }

    public function actors()
    {
        return $this->belongsToMany(Actor::class,'content_actor');
    }

    public function user_rating()    {        
        
        return $this->hasOne(ContentRating::class,'content_id')->where('user_id',Auth::id());
    }

    public function genre()    {        
        
        return $this->hasOne(ContentGenre::class,'id');
    }
   
 
}
