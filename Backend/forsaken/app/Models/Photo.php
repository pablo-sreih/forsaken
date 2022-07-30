<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model{
    use HasFactory;

    public function Location(){
        return $this->belongsTo(Location::class, 'location_id');
    }

    public function User(){
        return $this->belongsTo(User::class, 'user_id');
    }

}
