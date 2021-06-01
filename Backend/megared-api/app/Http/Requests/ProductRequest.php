<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
                'name' => 'required',
                'description' =>'required',
                'base_price' => 'required|numeric|min:0|max:1,00',
                'taxes' => 'required|numeric|min:0|max:1,00',
                'stock' => 'required|min:0',
        ];
    }
}
