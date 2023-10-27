<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('User/Dashboard');
    }

    public function jadwalSholat(){
        return Inertia::render('User/JadwalSholat');
    }

    public function doa(){
        return Inertia::render('User/Doa');
    }




    
    public function tes(){
        return Inertia::render('User/Tes');
    }
}
