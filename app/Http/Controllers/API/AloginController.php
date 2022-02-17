<?php

namespace App\Http\Controllers\API;

use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Models\Usuario;
use Illuminate\Http\Request;

class AloginController extends Controller
{
    public function list_usuarios()
    {
        $data = DB::select("select * from usuarios");
        $response['data'] = $data;
        return response()->json($data);
    }
    public function valida(Request $request)
    {
        try {
            $user = $request['name'];
            $pass = $request['password'];
            $data = DB::select("select * from usuarios where user='$user' and pass='$pass'");
            if ($data) {
                $response['success'] = true;
                $response['data'] = $data;
            } else {
                $response['success'] = false;
            }
        } catch (\Exception $e) {
            $response['message'] = $e->getMessage();
            $response['success'] = false;
        }
        return $response;
    }
    public function list_modulos($id)
    {
        $data = DB::select(" SELECT m.idmodulo as idmodulo, m.descripcion as modulos, mo.descripcion as submodulos, mo.idmodulo as idsubmodulo, m.icono as icono , mo.url as url from permisos as p INNER JOIN modulos as m ON p.idmodulo=m.idmodulo INNER JOIN modulos as mo ON mo.padre=m.idmodulo where p.idperfil='$id' order by m.idmodulo");
        $response['data'] = $data;
        return $response;
    }
}
