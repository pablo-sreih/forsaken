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
                    "name" => "Moundsville",
                    "city" => "West Virginia, U.S.",
                    "latitude" => 39.0,
                    "longitude" => -80.5,
                    "avg_emf_reading" => 90,
                    "avg_rating"=> 3.8
                ],
                "user_id"=> 11,
                "location_id"=> 5,
                "creation_date"=> "2022-03-01",
                "caption"=> "Test",
                "image"=> "https://thumbor.thedailymeal.com/pe1zAOfjSXLQdXC81Xy5Ndn2_mQ=/870x565/filters:format(webp)/https://www.theactivetimes.com/sites/default/files/uploads/1/14_Gulliver's%20Kingdom_FLcirk_edit.jpg",
                "total_likes"=> 13
                ],
                [
                    "id"=> 2,
                "location" => [
                    "id"=> 1,
                    "name" => "Dolls Island",
                    "city" => "Mexico",
                    "latitude"=> 19.43,
                    "longitude"=> -99.13,
                    "avg_emf_reading"=> 230,
                    "avg_rating"=> 4.5
                ],
                "location_id"=> 5,
                "user_id"=> 8,
                "creation_date"=> "2022-07-01",
                "caption"=> "Test",
                "image"=> "https://thumbor.thedailymeal.com/tB7uXTA17gwKykDsP0EyhLxFKFY=/870x565/filters:format(webp)/https://www.theactivetimes.com/sites/default/files/uploads/1/12_Island%20of%20the%20dolls_Slide_edit.jpg",
                "total_likes"=> 53
                ],
                [
                    "id" => 1,
                    "location" => [
                        "id" => 1,
                        "name" => "Moundsville",
                        "city" => "West Virginia, U.S.",
                        "latitude" => 39.0,
                        "longitude" => -80.5,
                        "avg_emf_reading" => 90,
                        "avg_rating"=> 3.8
                    ],
                    "user_id"=> 11,
                    "location_id"=> 5,
                    "creation_date"=> "2022-03-01",
                    "caption"=> "Test",
                    "image"=> "https://thumbor.thedailymeal.com/pe1zAOfjSXLQdXC81Xy5Ndn2_mQ=/870x565/filters:format(webp)/https://www.theactivetimes.com/sites/default/files/uploads/1/14_Gulliver's%20Kingdom_FLcirk_edit.jpg",
                    "total_likes"=> 13
                    ]
            ];
        return response()->json($posts);

        }

    public function testGetAllLocations() {
        $locations = [
            [
                "id" => 1,
                "name" => "Ain Sofar Train Station",
                "city" => "Saoufar, Lebanon",
                "latitude" => 33.80,
                "longitude" => 35.70,
                "avg_emf_reading" => 60,
                "avg_rating" => 4.0,
            ],
            [
                "id" => 2,
                "name" => "Bhamdoun Synagogue",
                "city" => "Bhamdoun, Lebanon",
                "latitude" => 33.80, 
                "longitude" => 35.66,
                "avg_emf_reading" => 80,
                "avg_rating" => 4.5,
            ]
        ];
    }
}
