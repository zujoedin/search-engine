<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use Config;
class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
    
        $type = $request->type;
        $type_id = Config::get('constants.constants.'.$type);
        
        //We could have also created a subquery or a select raw, but the best and most secured way is using laravel eloquent "withAvg"
        $data = Content::withAvg('ratings','rating')->with('actors')->with('user_rating')->with('genre')->where('type_id',$type_id)->orderBy('ratings_avg_rating','desc')->get();

        //Return content(movie/show) with rating, avg_rating, actors, user_rating, genre
        return $data;
    }

    
}
