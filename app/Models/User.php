<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'usuarios';

    protected $fillable = ['idusuario', 'nombre', 'user', 'apellido', 'password'];
    protected $primaryKey = 'idusuario';
    // protected $keyType = 'string';
    protected $hidden = ['deleted_at', 'remember_token'];

    public $timestamps = true;

    protected $keyType = 'string';

    public $incrementing = false;

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
