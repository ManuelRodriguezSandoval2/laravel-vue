<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\Api\ClienteController;

class Cliente extends Model
{
    use HasFactory;

    protected $table="usuarios";
    protected $primaryKey="id";
    protected $fillable=[
        'nombre',
        'salario',
        'pais',
        'ciudad'
    ];
}
