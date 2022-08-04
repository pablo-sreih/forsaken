<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Location;
use App\Models\User;
use App\Models\UserFollowing;
use App\Models\Photo;

use Auth;

class TestController extends Controller
{

    public function deletePost(Request $request){
        $post_id = $request->post_id;
        Photo::where("id", $post_id)->delete();

        return response()->json([
            "status" => "success"
        ],200);
    }

    public function approvePost(Request $request){
        $post_id = $request->post_id;
        Photo::where("id", $post_id)->update(["approved" => 1]);

        return response()->json([
            "status" => "success"
        ],200);
    }

    public function getPendingPosts(){
        $posts = Photo::where("approved", 0)->with("User")->orderBy("created_at", 'DESC')->get();
        return response()->json($posts);
    }

    public function getAllUsers() {
        $users = User::with("followers", "followings", "posts")->get();

        return response()->json($users);
    }

    public function getCounts() {
        $users = User::all()->count();
        $posts = Photo::all()->count();
        $locations = Location::all()->count();
        $high_emf = Location::max('avg_emf_reading');

        return response()->json([
            'users' => $users,
            'posts' => $posts,
            'locations' => $locations,
            'high_emf' => $high_emf
        ],200);
    }

    public function addReview(Request $request){
        $id = Auth::id();
        $review = $request->review;
        $rating = $request->rating;
        
        $result = [
            "success" => true
        ];

        return response()->json($result); 
    }
    
    public function getLocation(Request $request){
        $location_id = $request->location_id;
        $location = Location::where("id", $location_id)->with("Photos")->get();
        return response()->json($location);
    }

    public function addEMF(Request $request){
        $id = Auth::id();
        $location_id = $request->location_id;
        $emf = $request->emf;

        $location = Location::find($location_id);
        $location->avg_emf_reading = ($location->avg_emf_reading + $emf) / 2;
        $location->save();

        $result = [
            "success" => true
        ];

        return response()->json($result); 
    }

    public function addRating(Request $request) {
        $location_id = $request->location_id;
        $rating = $request->rating;

        $location = Location::find($location_id);
        $location->avg_rating = ($location->avg_rating + $rating) / 2;
        $location->save();

        $result = [
            "success" => true
        ];

        return response()->json($result);
    }

    public function follow(Request $request){
        $id = Auth::id();
        $following = new UserFollowing;
        $following->user_id = Auth::id();
        $following->follower_id = $request->user_id;
        $following->save();

        $result = [
            "success" => true
        ];
        return response()->json($result);
    }

    public function unfollow(Request $request){
        $id = Auth::id();
        $user_id = $request->user_id;
        $following = UserFollowing::where("user_id", $id)->where("follower_id", $user_id)->delete();
        $result = [
            "success" => true
        ];
        return response()->json($result); 
    }

    public function addPost(Request $request){
        $id = Auth::id();
       
        $post = new Photo;
        $post->user_id = $id;
        $post->location_id = $request->location_id;
        $post->caption = $request->caption;
        $uri = $request->uri;
        $post->image = $uri;
        $post->total_likes = 0;
        $post->save();

        $result = [
            "success" => true
        ];

        return response()->json($result); 
    }

    public function getUserInfo(Request $request){
        $user = Auth::user();
        $id = Auth::id();
        $posts = Photo::where("user_id", Auth::id())->get();
        $followers = UserFollowing::where("follower_id", $id)->count();
        $following = UserFollowing::where("user_id", $id)->count();

        $results = [
            "user" => $user,
            "photos" => $posts,
            "followers" => $followers,
            "following" => $following
        ];

        return response()->json($results); 
    }

    public function getFollowers() {
        $id = Auth::id();
        $followers = UserFollowing::where("follower_id", $id)->select("user_id")->with("User")->get()->toArray();

        return response()->json($followers);
    }

    public function getFollowings() {
        $id= Auth::id();
        $followings= UserFollowing::where("user_id", $id)->select("follower_id")->with("UserFollowing")->get()->toArray();

        return response()->json($followings);
    }

    public function testAPI() {
        $id = Auth::id();
        $following = UserFollowing::where("user_id", $id)->select("follower_id")->get()->toArray();
        $posts = Photo::whereIn("user_id", $following)->where("approved", 1)->with("Location")->with("User")->inRandomOrder("created_at", 'DESC')->get();

        return response()->json($posts);

        }

    public function testGetAllLocations() {

        $locations = Location::all();

        // $locations = [
        //     [
        //         "id" => 1,
        //         "name" => "Ain Sofar Train Station",
        //         "city" => "Saoufar, Lebanon",
        //         "latitude" => 33.80,
        //         "longitude" => 35.70,
        //         "avg_emf_reading" => 60,
        //         "avg_rating" => 4.0,
        //         "description" => "Sofar holds an amazing amount of history. The train station, dating back to the 1960s, was taken by travelers coming from Beirut to visit the Grand Sofar Hotel, famous for its notorious casinos and nightclubs."
        //     ],
        //     [
        //         "id" => 2,
        //         "name" => "Bhamdoun Synagogue",
        //         "city" => "Bhamdoun, Lebanon",
        //         "latitude" => 33.80, 
        //         "longitude" => 35.66,
        //         "avg_emf_reading" => 80,
        //         "avg_rating" => 4.5,
        //         "description" => "Known as 'The Last Temple', this place of worship belonged to the Lebanese Jewish Community and was built in the early 20th century."
        //     ],
        //     [
        //         "id" => 3,
        //         "name" => "Qasr Bechara Khoury",
        //         "city" => "Beirut, Lebanon",
        //         "latitude" => 33.88, 
        //         "longitude" => 35.49,
        //         "avg_emf_reading" => 70,
        //         "avg_rating" => 3.9,
        //         "description" => "An abandoned palace situated Zokak el-Blat. According to a source, the palace has been abandoned for a long time and is now occupied by a carpenter who claims to pay rent to the Municipality."
        //     ],
        //     [
        //         "id" => 4,
        //         "name" => "Kassouf Hotel",
        //         "city" => "Dhour Al Choueir, Lebanon",
        //         "latitude" => 33.90, 
        //         "longitude" => 35.71,
        //         "avg_emf_reading" => 120,
        //         "avg_rating" => 4.7,
        //         "description" => "A beautiful hotel that was built in the 1930s and damaged by the war. With plans to renovate the hotel, the place still stands as one of the biggest abandoned hotels in the country."
        //     ],
        //     [
        //         "id" => 5,
        //         "name" => "Amrieh Hotel",
        //         "city" => "Bikfaya, Lebanon",
        //         "latitude" => 33.91,
        //         "longitude" => 35.66,
        //         "avg_emf_reading" => 230,
        //         "avg_rating" => 4.9,
        //         "description" => "Another hotel that will give you the creeps. This place dates back to the 1960s and is famous for its theatre and indoor cinema."
        //     ],
        //     [
        //         "id" => 6,
        //         "name" => "Aquarium",
        //         "city" => "Batroun, Lebanon",
        //         "latitude" => 34.25,
        //         "longitude" => 35.65,
        //         "avg_emf_reading" => 68,
        //         "avg_rating" => 3.6,
        //         "description" => "Dominating Batroun's skyline, this place was originally intended to be an aquarium but was stalled by the civil war."
        //     ],
        //     [
        //         "id" => 7,
        //         "name" => "McMagic",
        //         "city" => "Nahr Al Kalb, Lebanon",
        //         "latitude" => 33.95,
        //         "longitude" => 35.60,
        //         "avg_emf_reading" => 83,
        //         "avg_rating" => 3.9,
        //         "description" => "This iconic kids park closed in the 90s but all games remain until today."
        //     ],
        //     [
        //         "id" => 8,
        //         "name" => "Donna Maria",
        //         "city" => "Sursock, Lebanon",
        //         "latitude" => 33.80,
        //         "longitude" => 35.69,
        //         "avg_emf_reading" => 56,
        //         "avg_rating" => 4.2,
        //         "description" => "Built in 1909 by Alfred Bey Sursock as a gift to his wife, Donna Maria Teresa Serra, the villa looks like a fairytale castle complete with turrets. It is located above the municipality building in Sofar on a hill overlooking the old Damascus Road. Although Villa Donna Maria suffered damage during the Civil War, some restoration work has begun and its spectacular garden is now used as a venue for weddings and parties."
        //     ],
        //     [
        //         "id" => 9,
        //         "name" => "Kfar Aamay",
        //         "city" => "Kfar Aamay, Lebanon",
        //         "latitude" => 33.76,
        //         "longitude" => 35.59,
        //         "avg_emf_reading" => 90,
        //         "avg_rating" => 4.4,
        //         "description" => "Forming part of the Aley district, the village of Kfar Aamay was once home to no fewer than seven silk factories. Most were destroyed during times of conflict and this particular factory, owned by the Assaf family, was abandoned around 1914. It has since been partially renovated from the inside for personal use by the descendants of the family."
        //     ],
        //     [
        //         "id" => 10,
        //         "name" => "Grand Hotel",
        //         "city" => "Aley, Lebanon",
        //         "latitude" => 33.80,
        //         "longitude" => 35.59,
        //         "avg_emf_reading" => 130,
        //         "avg_rating" => 4.7,
        //         "description" => "Also known as the Gebeily Hotel, the Grand Aley was built by a wealthy family from Beirut in 1926 on a hill overlooking the main road of the city of Aley in Mount Lebanon. The hotel was highly regarded for hosting lively parties, gambling, exclusive fashion shows and many other events, which attracted people like Farid Al Atrash and Umm Kulthum. It was also renowned for serving superb French cuisine. During World War Two, however, it became a military base after which it reopened its doors only to be closed again with the onset of the Lebanese Civil War in 1975."
        //     ]
        // ];

        return response()->json($locations);
    }
}
