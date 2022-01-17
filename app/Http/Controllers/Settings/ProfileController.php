<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Config;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    /**
     * Update the user's profile information.
     */
    public function updateProfile(Request $request)
    {
        $user = $request->user();

        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users,email,'.$user->id,
        ]);

        $user->update($request->only('name', 'email'));

        return response()->json($user);
    }

}
