<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Content;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function search(Request $request)
    {
    
        $data = Content::orderBy('topic')->get();
        return $data;
    }

    
}
