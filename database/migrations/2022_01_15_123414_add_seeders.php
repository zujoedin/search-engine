<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\ContentType;

class AddSeeders extends Migration
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
                    'type' => 'movie',    
                ],
                [
                    'type' => 'show',    
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
