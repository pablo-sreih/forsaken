<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserFollowing;

class UserFollowingController extends Controller
{
    public function getFollowers(Request $request) {
        $user_id = $request->id;
        $followers = UserFollowing::with("followers")->where("user_id", $user_id)->get();
        return response()->json([
            "followers" => $followers
        ],200);
    }
}
