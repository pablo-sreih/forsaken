<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LikeController extends Controller
{
    public function addLike(Request $request) {
        $like = new Like();
        $user_id = auth()->user()->id;
        $like->user_id = $user_id;
        $like->post_id = $request->post_id;
        $like->save();

        return response()->json([
            'status' => 'success',
            'like' => $like,
        ],200);
    }
}
