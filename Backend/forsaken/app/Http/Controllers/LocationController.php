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
        $location->name = $request->name;
        $location->city = $request->city;
        $location->description = $request->description;
        $location->latitude = $request->latitude;
        $location->longitude = $request->longitude;
        $location->avg_emf_reading = $request->avg_emf_reading;
        $location->avg_rating = 5;
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

    public function deleteLocationComment(Request $request) {
        Location_comment::where('id', $request->comment_id)->delete();

        return response()->json([
            'status' => 'success',
        ],200);
    }

    public function getAllLocationComments (Request $request) {
        $comments = Location_comment::where('location_id', $request->location_id)->get();

        return response()->json([
            'status' => 'success',
            'comments' => $comments,
        ],200);
    }
}
