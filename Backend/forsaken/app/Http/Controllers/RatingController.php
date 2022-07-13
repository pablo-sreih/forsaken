<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Rating;

class RatingController extends Controller
{
    public function addRating(Request $request) {
        $rating = new Rating();
        $user_id = auth()->user()->id;
        $rating->user_id = $user_id;
        $rating->location_id = $request->location_id;
        $rating->user_rating = $request->user_rating;
        $rating->save();

        return response()->json([
            'status' => 'success',
            'rating' => $rating,
        ],200);
    }
}
