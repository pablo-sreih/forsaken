<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;

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
}
