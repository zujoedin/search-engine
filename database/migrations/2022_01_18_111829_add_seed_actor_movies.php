<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\ContentActor;

class AddSeedActorMovies extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        $actors = [                
            [
                'content_id' => 1 ,
                'actor_id' => 1, 
            ],
            [
                'content_id' => 2,
                'actor_id' => 2 
            ], 
            [
                'content_id' => 3,
                'actor_id' => 3 
            ], 
            [
                'content_id' => 4,
                'actor_id' => 7 
            ], 
            [
                'content_id' => 5,
                'actor_id' => 4 
            ], 
            [
                'content_id' => 6,
                'actor_id' => 5 
            ], 
            [
                'content_id' => 7,
                'actor_id' => 6 
            ], 
            [
                'content_id' => 8,
                'actor_id' => 7 
            ], 
            [
                'content_id' => 9,
                'actor_id' => 8 
            ], 
            [
                'content_id' => 10,
                'actor_id' => 7 
            ], 
            [
                'content_id' => 11,
                'actor_id' => 9 
            ], 
            [
                'content_id' => 12,
                'actor_id' => 10 
            ], 
            [
                'content_id' => 13,
                'actor_id' => 11 
            ], 
            [
                'content_id' => 14,
                'actor_id' => 13 
            ], 
            [
                'content_id' => 15,
                'actor_id' => 14 
            ], 
            [
                'content_id' => 16,
                'actor_id' => 15 
            ], 
            [
                'content_id' => 17,
                'actor_id' => 11 
            ], 
            [
                'content_id' => 18,
                'actor_id' => 16 
            ], 
            [
                'content_id' => 19,
                'actor_id' => 17 
            ], 
            [
                'content_id' => 20,
                'actor_id' => 18 
            ], 
            [
                'content_id' => 21,
                'actor_id' => 19 
            ], 
            [
                'content_id' => 22,
                'actor_id' => 5 
            ], 
            [
                'content_id' => 23,
                'actor_id' => 19 
            ], 
            [
                'content_id' => 24,
                'actor_id' => 20 
            ], 
            [
                'content_id' => 25,
                'actor_id' => 19 
            ], 
            [
                'content_id' => 26,
                'actor_id' => 22 
            ], 
            [
                'content_id' => 27,
                'actor_id' => 7 
            ], 
            [
                'content_id' => 28,
                'actor_id' => 24 
            ], 
            [
                'content_id' => 29,
                'actor_id' => 23 
            ], 
            [
                'content_id' => 30,
                'actor_id' => 20 
            ], 
            [
                'content_id' => 4,
                'actor_id' => 9 
            ], 
            [
                'content_id' => 23,
                'actor_id' => 21 
            ], 
            [
                'content_id' => 26,
                'actor_id' => 23 
            ], 
           
            
           
        ];

        foreach ($actors as $actor) {
            $newActor = ContentActor::create($actor);
            $newActor->save();
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
