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
            ],
            [
                "id" => 3,
                "name" => "Qasr Bechara Khoury",
                "city" => "Beirut, Lebanon",
                "latitude" => 33.88, 
                "longitude" => 35.49,
                "avg_emf_reading" => 70,
                "avg_rating" => 3.9,
            ],
            [
                "id" => 4,
                "name" => "Kassouf Hotel",
                "city" => "Dhour Al Choueir, Lebanon",
                "latitude" => 33.90, 
                "longitude" => 35.71,
                "avg_emf_reading" => 120,
                "avg_rating" => 4.7,
            ],
            [
                "id" => 5,
                "name" => "Amrieh Hotel",
                "city" => "Bikfaya, Lebanon",
                "latitude" => 33.91,
                "longitude" => 35.66,
                "avg_emf_reading" => 230,
                "avg_rating" => 4.9,
            ],
            [
                "id" => 6,
                "name" => "Aquarium",
                "city" => "Batroun, Lebanon",
                "latitude" => 34.25,
                "longitude" => 35.65,
                "avg_emf_reading" => 68,
                "avg_rating" => 3.6,
            ],
            [
                "id" => 7,
                "name" => "McMagic",
                "city" => "Nahr Al Kalb, Lebanon",
                "latitude" => 33.95,
                "longitude" => 35.60,
                "avg_emf_reading" => 83,
                "avg_rating" => 3.9,
            ],
            [
                "id" => 8,
                "name" => "Donna Maria",
                "city" => "Sursock, Lebanon",
                "latitude" => 33.80,
                "longitude" => 35.69,
                "avg_emf_reading" => 56,
                "avg_rating" => 4.2,
            ],
            [
                "id" => 9,
                "name" => "Kfar Aamay",
                "city" => "Kfar Aamay, Lebanon",
                "latitude" => 33.76,
                "longitude" => 35.59,
                "avg_emf_reading" => 90,
                "avg_rating" => 4.4,
            ],
            [
                "id" => 10,
                "name" => "Grand Hotel",
                "city" => "Aley, Lebanon",
                "latitude" => 33.80,
                "longitude" => 35.59,
                "avg_emf_reading" => 130,
                "avg_rating" => 4.7,
            ]
        ];

        return response()->json($locations);
    }
}
