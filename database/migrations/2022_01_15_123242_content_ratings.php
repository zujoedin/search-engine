<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ContentRatings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('content_ratings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->tinyInteger('rating');            
            $table->unsignedBigInteger('content_id');
            $table->foreign('content_id')->references('id')->on('contents');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('content_ratings');
    }
}
