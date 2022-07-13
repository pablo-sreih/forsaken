<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Photo;
use App\Models\Photo_comment;

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

    public function deletePhoto(Request $request) {
        Photo::where('id', $request->photo_id)->delete();

        return response()->json([
            'status' => 'success',
        ],200);
    }

    public function addPhotoComment (Request $request) {
        $comment = new Photo_comment();
        $comment->user_id = $request->user_id;
        $comment->photo_id = $request->photo_id;
        $comment->comment = $request->comment;
        $comment->save();

        return response()->json([
            'status' => 'success',
            'comment' => $comment,
        ],200);
    }
}
