<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ContentActor extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('content_actor', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('actor_id');
            $table->foreign('actor_id')->references('id')->on('actors');
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
        Schema::dropIfExists('content_actor');
    }
}
