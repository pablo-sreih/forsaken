<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Photo;
use App\Models\UserFollowing;

class UserController extends Controller
{
    public function addAbout(Request $request) {
        $about = $request->about;
        $user = auth()->user();
        $user -> about = $about;
        $user -> save();

        return response()->json([
            'status' => 'success',
            'user' => $user,
        ],200);
    }

    public function getUser(Request $request) {
        $user_id = $request->user_id;
        $user = User::find($user_id);
        $photos = Photo::where("user_id", $user_id)->get();
        $followers = UserFollowing::where("follower_id", $user_id)->count();
        $followings = UserFollowing::where("user_id", $user_id)->count();

        return response()->json([
            'status' => 'success',
            'user' => $user,
            'photos' => $photos,
            'followers' => $followers,
            'followings' => $followings
        ],200);
    }

    public function addProfilePic(Request $request) {
        $user = auth()->user();
        $profile_pic = $request->profile_pic;
        $user -> profile_pic = $profile_pic;
        $user -> save();

        return response()->json([
            'status' => 'success',
            'profile_pic' => $profile_pic,
        ],200);
    }

    public function profile() {
        return response()->json(auth()->user());
    }

}
