<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TodoController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\LocationController;
use App\Http\Controllers\PhotoController;

Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/addAbout', [UserController::class, 'addAbout']);
Route::post('/getUser', [UserController::class, 'getUser']);
Route::post('/addProfilePic', [UserController::class, 'addProfilePic']);
Route::get('/profile', [UserController::class, 'profile']);

Route::get('/getAllLocations', [LocationController::class, 'getAllLocations']);
Route::post('/addLocation', [LocationController::class, 'addLocation']);
Route::post('/getLocationByID', [LocationController::class, 'getLocationById']);
Route::post('/addLocationComment', [LocationController::class, 'addLocationComment']);
Route::post('/deleteLocationComment', [LocationController::class, 'deleteLocationComment']);

Route::post('/addPhoto', [PhotoController::class, 'addPhoto']);
Route::post('/deletePhoto', [PhotoController::class, 'deletePhoto']);
Route::post('/addPhotoComment', [PhotoController::class, 'addPhotoComment']);
Route::post('/deletePhotoComment', [PhotoController::class, 'deletePhotoComment']);
Route::post('/getAllPhotoComments', [PhotoController::class, 'getAllPhotoComments']);

