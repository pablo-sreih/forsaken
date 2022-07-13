<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Activity;

class ActivityController extends Controller
{
    public function addActivity(Request $request) {
        $activity = new Activity();
        $user_id = auth()->user()->id;
        $activity->user_id = $user_id;
        $activity->location_id = $request->location_id;
        $activity->user_emf_reading = $request->user_emf_reading;
        $activity->save();

        return response()->json([
            'status' => 'success',
            'activity' => $activity,
        ],200);
    }
}
