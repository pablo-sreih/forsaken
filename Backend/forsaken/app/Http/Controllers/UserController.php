<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function addAbout(Request $request) {
        $about = $request->about;
        $user_id = $request->user_id;
        $user = User::find($user_id);
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

        return response()->json([
            'status' => 'success',
            'user' => $user,
        ],200);
    }

    public function addProfilePic(Request $request) {
        $user_id = $request->user_id;
        $profile_pic = $request->profile_pic;
        $user = User::find($user_id);
        $user -> profile_pic = $profile_pic;
        $user -> save();

        return response()->json([
            'status' => 'success',
            'profile_pic' => $profile_pic,
        ],200);
    }

    public function addAddress(Request $request) {
        $user_id = $request->user_id;
        $address = $request->address;
        $user = User::find($user_id);
        $user -> address = $address;
        $user -> save();

        return response()->json([
            'status' => 'success',
            'address' => $address,
        ],200);
    }

}
