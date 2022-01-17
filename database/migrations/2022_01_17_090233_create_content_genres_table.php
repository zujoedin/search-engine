<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\ContentGenre;

class CreateContentGenresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('content_genres', function (Blueprint $table) {
            $table->id();
            $table->string('genre');
            $table->timestamps();
        });

        Schema::table('content_genres', function (Blueprint $table) {
            $types = [
                [
                    'genre' => 'Action',    
                ],
                [
                    'genre' => 'Adventure',    
                ],
                [
                    'genre' => 'Comedy',    
                ],
                [
                    'genre' => 'Fantasy',    
                ],
                [
                    'genre' => 'Horror',    
                ],
                [
                    'genre' => 'Romance',    
                ],
                [
                    'genre' => 'Thriller',    
                ],    
    
            ];
    
            foreach ($types as $type) {
                $newType = ContentGenre::create($type);
                $newType->save();
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('content_genres');
    }
}
