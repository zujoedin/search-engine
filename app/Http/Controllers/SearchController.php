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
        
        $search = $request->search;

        $query = Content::select('contents.id as id','contents.description','contents.cover_image','contents.title','contents.type_id','contents.release_date')->withAvg('ratings','rating')->with('actors')->with('user_rating')->with('genre')->leftJoin('content_actor','contents.id','content_actor.content_id')->leftJoin('actors','actors.id','content_actor.actor_id')->where('type_id',$type_id);
        
        // $query = Content::select('contents.id as id','contents.description','contents.cover_image','contents.title','contents.type_id','contents.release_date')->withAvg('ratings','rating')->with('genre')->with('actors')->with('user_rating')->where('type_id',$type_id);

        $query->where(function($query) use ($search){
            $query->where('contents.description', 'LIKE', '%'.$search.'%')
                  ->orWhere('contents.title', 'LIKE', '%'.$search.'%')
                  ->orWhereMonth('contents.release_date', '=', $search)
                  ->orWhereDay('contents.release_date', '=', $search)
                  ->orWhereYear('contents.release_date', '=', $search)
                  ->orWhere('contents.release_date', '=', '%'.$search.'%')
                  ->orWhere('actors.last_name', 'LIKE', '%'.$search.'%')
                  ->orWhere('actors.first_name', 'LIKE', '%'.$search.'%');
        });
        
        $data = $query->groupBy('contents.id','contents.description','contents.cover_image','contents.title','contents.type_id','contents.release_date')->orderBy('ratings_avg_rating','desc')->get();
        //Return content(movie/show) with rating, avg_rating, actors, user_rating, genre
        return $data;
    }

    
}
