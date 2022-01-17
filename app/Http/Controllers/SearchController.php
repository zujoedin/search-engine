<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;
use App\Models\ContentRating;
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
        
        //We need a way to get the id of the movie or show, we can do this in several ways
        //We can pull from the database based on type that is comming from request, which is maybe the best way
        //We can also send type_id from front-end, which is something i dont perfer
        //I this case we have pulled it from config file, not the most accurate way but just to show what can be done, this practice is valid but it has its downsides
        $type = $request->type;
        $type_id = Config::get('constants.constants.'.$type);
        
        //get search value from request
        $search = $request->search;
        
        //define are variables used for phrases like "at most 5 stars"
        $add_search_phrase = false;
        $search_sign = '';
        $number = '';
        $search_stars = false;
        $search_year = false;
        $search_how_old = false;
      
        $search_phrase = [];
        // define phrases user can input
        $search_phrase_database = [                
            'stars' => "=",
            'at_most_stars' => "<=",
            'at_least_stars' => ">=",
            'before' => "<",
            'after' => ">",
            'older_than_years' => "<",
            'younger_than_years' => ">",  
            'younger_than' => ">",
            'older_than' => "<",           
            ];
        
     

        //extract search phrase if there is any
        //exception: if the users writes two phrases it will not work
        preg_match('/"(.*?)"/', $search, $search_phrase);
        if(!empty($search_phrase)){
            $search_phrase = $search_phrase[1];
            $number = preg_replace('/[^0-9]/', '', $search_phrase);
            $search_phrase = str_replace(" ".$number, "", $search_phrase);
            $search_phrase = str_replace(" ", "_", $search_phrase);
                        
            foreach(array_keys($search_phrase_database) as $key){        
                if($search_phrase == $key){                    
                    if (str_contains($search_phrase, 'stars')) { 
                        $search_stars = true;
                    }else if(str_contains($search_phrase, 'older_than_years') || str_contains($search_phrase, 'younger_than_years')){
                        $search_how_old = true;
                    }else {
                        $search_year = true;
                    }
                    $add_search_phrase = true;
                    $search_sign = $search_phrase_database[$key];
                }
            }                       
        }
        //remove search phrase from the search
        $search = preg_replace('/"[\s\S]+?"/', '', $search);        
        
        //search query can be "tom hanks guard", however the actor table has two columns, first_name and last_name, and guard is definitly not the name of the actor so this is why we need to explode the search and find the results by pieces.        
        $searches = explode(" ", $search);
        
        
        // subquery
        $avg_rating_sub_query = ContentRating::selectRaw("AVG(rating) as rating_total,content_id")->groupBy('content_id');
        
        //initial query
        $query = Content::select('contents.id as id','contents.description','contents.cover_image','contents.title','contents.type_id','contents.release_date')
        ->withAvg('ratings','rating')
        ->with('actors')
        ->with('user_rating')
        ->with('genre')
        ->leftJoin('content_actor','contents.id','content_actor.content_id')
        ->leftJoin('actors','actors.id','content_actor.actor_id')
        ->leftJoinSub($avg_rating_sub_query, 'content_ratings', function ($join) {
            $join->on('contents.id', '=', 'content_ratings.content_id');
        })
        ->where('type_id',$type_id);
      
        //for each piece of the array add where condition
        //the search would not find the result if you type in tom fanks instead of tom hanks, however making the change would simply mean we need to 
        //include foreach inside the orWhere clause
        foreach($searches as $search){
            // in case space is added after phrase
            if($search!=''){
                $query->where(function($query) use ($search){                    
                    $query
                        ->orWhere('contents.description', 'LIKE', '%'.$search.'%')
                        ->orWhere('contents.title', 'LIKE', '%'.$search.'%')
                        //In the taks the result should work with textual attributes, not dates, however I have added the year as well              
                        ->orWhereYear('contents.release_date', '=', $search)
                        ->orWhere('actors.last_name', 'LIKE', '%'.$search.'%')
                        ->orWhere('actors.first_name', 'LIKE', '%'.$search.'%');
                });

                if($add_search_phrase){                        
                    if($search_year){
                        $query->whereYear('contents.release_date', "$search_sign", $number);
                    }else if($search_stars){
                        $query->where('rating_total', "$search_sign", $number);
                    }else if($search_how_old){
                        $current_year = date("Y");
                        $number = $current_year-$number;
                        $query->whereYear('contents.release_date', "$search_sign", $number);
                    }
                } 
            } 
        };
        
        // edge case if user types in something not intended as a phrase such as "asdadasadsda"
        if(!$searches || $add_search_phrase){
            //get the results and group then beacause we dont want duplicates
            $data = $query->groupBy('contents.id','contents.description','contents.cover_image','contents.title','contents.type_id','contents.release_date')->orderBy('ratings_avg_rating','desc')
            ->get();
        }else{
            $data = [];
        }

        //Return searched content(movie/show) with rating, avg_rating, actors, user_rating, genre
        return $data;
    }

    
}
