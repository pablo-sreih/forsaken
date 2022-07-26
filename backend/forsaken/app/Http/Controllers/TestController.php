<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function testAPI() {
        $posts = [
            [
                "id" => 1,
                "location" => [
                    "id" => 1,
                    "latitude" => "12.12",
                    "longitude" => "12.13",
                    "avg_emf_reading" => "90",
                    "avg_rating"=> "14"
                ],
                "user_id"=> 11,
                "location_id"=> 5,
                "creation_date"=> "2022-03-01",
                "caption"=> "Test",
                "image"=> "https://cdn.wallpapersafari.com/29/46/EVshyr.jpg",
                "total_likes"=> 13
                ],
                [
                    "id"=> 2,
                "location" => [
                    "id"=> 1,
                    "latitude"=> "12.12",
                    "longitude"=> "12.13",
                    "avg_emf_reading"=> "90",
                    "avg_rating"=> "14"
                ],
                "location_id"=> 5,
                "user_id"=> 8,
                "creation_date"=> "2022-03-01",
                "caption"=> "Test",
                "image"=> "https://cdn.wallpapersafari.com/29/46/EVshyr.jpg",
                "total_likes"=> 5
                ]
            ];
        return response()->json($posts);
    }
}
