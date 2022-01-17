<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\App;
use Illuminate\Http\Request;
use App\Models\Content;
use App\Models\ContentRating;
use Illuminate\Support\Facades\DB;
use Config;
use Auth;

class ContentController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request)
    {
        //We need a way to get the id of the movie or show, we can do this in several ways
        //We can pull from the database based on type that is comming from request, which is maybe the best way
        //We can also send type_id from front-end, which is something i dont perfer
        //I this case we have pulled it from config file, not the most accurate way but just to show what can be done, this practice is valid but it has its downsides
        $type = $request->type;
        $type_id = Config::get('constants.constants.'.$type);
        
        //We could have also created a subquery or a select raw, but the best and most secured way is using laravel eloquent "withAvg"
        $data = Content::withAvg('ratings','rating')->with('actors')->with('user_rating')->with('genre')->where('type_id',$type_id)->orderBy('ratings_avg_rating','desc')->get();

        //Return content(movie/show) with rating, avg_rating, actors, user_rating, genre
        return $data;
    }

    public function rate(Request $request)
    {      
        // No need for transaction here since we have only one update and there cant be no table locking          
        DB::beginTransaction();
        try {

            //if the movie has not been rated ever then or it has not been rated by this user, then we need to create the record
            //otherwise we should update the existing record
            ContentRating::updateOrCreate(
                ['content_id' => $request->id, 'user_id' => Auth::id()],
                ['rating' => $request->rating]
            );

            // get new rating for the content
            $data = ContentRating::where('content_id',$request->id)->avg('rating');

            //commit transaction
            DB::commit();

            // return rating
            return $data;

        } catch (\Exception $e) {

            // in case the query fails rollback
            DB::rollback();

            // return error responce
            return response()->json([
                'status' => 'error',
                'msg' => $e
            ], 422);
        }
        
    }
}

	