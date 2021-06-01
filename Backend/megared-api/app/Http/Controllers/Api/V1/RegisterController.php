<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\RegisterRequest;

class RegisterController extends Controller
{
 /*    protected function registered(Request $request, $user)
    {


        return response()->json(['data' => $user->toArray()], 201);
    } */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(RegisterRequest $request)
    {
        $request->validate();
        $user= new User;

        $user->name=$request->name;
        $user->email=$request->email;
        $user->password=$request->password;
        $user->password_confirmate=$request->password_confirmate;

        $res=$user->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    /* public function register(RegisterRequest $request)
{

    $this->validator($request->all())->validate();


    event(new Registered($user = $this->create($request->all())));





    return $this->registered($request, $user)
                    ?: redirect($this->redirectPath('/products'));
} */
}
