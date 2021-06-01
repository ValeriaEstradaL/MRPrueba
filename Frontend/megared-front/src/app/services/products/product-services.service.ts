import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { productModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductServicesService {

  constructor(private http:HttpClient) {

  }
  private api_url="http://localhost:8000/api/v1/products";

 public getProducts(): Observable <productModel[]>{
  return this.http.get<productModel[]>(this.api_url);
 }
  createProducts(product: productModel){
      console.log(product);
   return this.http.post(this.api_url,product);
 }
}
