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
        $user->save();

        return response()->json([
            'status' => "success",
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

}
