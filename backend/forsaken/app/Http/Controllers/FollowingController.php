<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\followings;

class FollowingController extends Controller
{
    public function follow(Request $request) {
        $follow = new followings();
        $user_id = auth()->user()->id;
        $follow->user_id = $user_id;
        $follow->following_user_id = $request->following_user_id;
        $follow->follower_user_id = null;
        $follow->save();

        return response()->json([
            "status" => "success",
            "follow" => $follow
        ],200);

    }
}
