<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Like;
use App\Models\User;


class LikeController extends Controller
{
    public function addLike(Request $request) {
        $like = new Like();
        $user_id = auth()->user()->id;
        $like->user_id = $user_id;
        $like->photo_id = $request->photo_id;
        $like->save();

        return response()->json([
            'status' => 'success',
            'like' => $like,
        ],200);
    }

    public function deleteLike(Request $request) {
        $user_id = auth()->user()->id;
        $photo_id = $request->photo_id;
        $like = Like::where("user_id", $user_id)->where("photo_id", $photo_id)->delete();
        $result = [
            "success" => true
        ];
        return response()->json($result);
    }
}
