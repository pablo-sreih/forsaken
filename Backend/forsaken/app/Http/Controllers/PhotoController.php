<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photo;

class PhotoController extends Controller
{
    public function addPhoto(Request $request) {
        $photo = new Photo();
        $photo->location_id = $request->location_id;
        $photo->user_id = $request->user_id;
        $photo->caption = $request->caption;
        $photo->image = $request->image;
        $photo->total_likes = 0;
        $photo->save();

        return response()->json([
            'status' => 'success',
            'photo' => $photo,
        ],200);
    }
}
