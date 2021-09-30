<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;

class ClienteController extends Controller
{

    public function obtenerCliente(Request $request){

        $cliente= Cliente::get();
        return $cliente;

    }
}
