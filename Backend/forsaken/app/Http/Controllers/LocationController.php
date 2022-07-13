<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;
use App\Models\Location_comment;

class LocationController extends Controller
{
    public function getAllLocations(Request $request) {
        $locations = Location::all();

        return response()->json([
            'status' => 'success',
            'locations' => $locations,
        ],200);
    }

    public function addLocation(Request $request) {
        $location = new Location();
        $location->latitude = $request->latitude;
        $location->longitude = $request->longitude;
        $location->avg_emf_reading = 0;
        $location->avg_rating = 0;
        $location->save();

        return response()->json([
            'status' => 'success',
            'location' => $location,
        ],200);
    }

    public function getLocationById(Request $request) {
        $location = Location::find($request->id);

        return response()->json([
            'status' => 'success',
            'location' => $location,
        ],200);
    }

    public function addLocationComment(Request $request) {
        $comment = new Location_comment();
        $comment->user_id = auth()->user()->id;
        $comment->location_id = $request->location_id;
        $comment->comment = $request->comment;
        $comment->save();

        return response()->json([
            'status' => 'success',
            'comment' => $comment,
        ],200);
    }
}
