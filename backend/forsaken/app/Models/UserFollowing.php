<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserFollowing extends Model
{
    use HasFactory;

    public function followers()
    {
        return $this->hasMany(User::class, "id", "user_id");
    }
}
