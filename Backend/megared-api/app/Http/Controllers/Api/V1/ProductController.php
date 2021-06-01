<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Requests\ProductRequest;
use Illuminate\Support\Facades\Auth;


class ProductController extends Controller
{
    /* public function __construct()
    {
        /* $this->middleware('auth:api', ['except' => ['index', 'show']]);
    } */
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return  $product= Product::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductRequest $request)
    {
        $validated = $request->validated();
        /* $user = Auth::user(); */

        $product = new Product;


        $product->name = $request->name;
        $product->description = $request->description;
        $product->base_price = (double) $request->base_price;
        $product->taxes = (double) $request->taxes;
        $product->state = $request->state;
        $product->stock = $request->stock;


        $res = $product->save();

        if ($res) {
            return response()->json(['message' => 'Product create succesfully'], 201);
        }
        return response()->json(['message' => 'Error to create post'], 500);
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request,  $id)
    {
        //
        $product=Product::find($id);
        $product->name = $request->name;
        $product->description = $request->description;
        $product->base_price = (double) $request->base_price;
        $product->taxes = (double) $request->taxes;
        $product->state = $request->state;
        $product->stock = $request->stock;
        $res = $product->save();

        if ($res) {
            return response()->json(['message' => 'Product update succesfully']);
        }

        return response()->json(['message' => 'Error to update post'], 500);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy( $id)
    {
        Product::destroy($id);
    }
}
