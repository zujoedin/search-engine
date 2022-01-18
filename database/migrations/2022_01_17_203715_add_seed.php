<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddSeed extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('content_types', function (Blueprint $table) {
            $types = [
                [
                    


// genre_id
// title
// cover_image
// description
// release_date
// created_at
// updated_at
// deleted_at   
                ],
                [
                    'type_id' => 1,
                    'type_id' => 1,  
                ],      
    
            ];
    
            foreach ($types as $type) {
                $newType = ContentType::create($type);
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
        //
    }
}
