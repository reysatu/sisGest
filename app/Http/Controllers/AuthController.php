<?php

namespace App\Http\Controllers;

use App\Models\Usuario;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $user = User::create([
            'nombre' => $request->input('nombre'),
            'user' => $request->input('user'),
            'password' => Hash::make($request->input('password')),

        ]);
        return $user;
    }
    public function login(Request $request)
    {

        $credentials = [
            'user' => $request['user'],
            'password' => $request['password'],
        ];
        if (!Auth::attempt($credentials)) {
            return response([
                'message' => 'invalid credendials'
            ], Response::HTTP_UNAUTHORIZED);
        }
        $user = User::where("user", $request['user'])->first();
        $token = $user->createToken('token')->plainTextToken;
        $cookie = cookie('jwt', $token, 60 * 24);
        return response([
            'messaje' => $token
        ])->withCookie($cookie);
    }

    public function user()
    {
        return Auth::user();
    }
    public function logout()
    {
        $cookie = Cookie::forget('jwt');

        return response([
            'message' => 'Success'
        ])->withCookie($cookie);
    }
}
