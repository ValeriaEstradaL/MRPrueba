import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { productModel } from 'src/app/models/product.model';
import { ProductServicesService } from 'src/app/services/products/product-services.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private productService:ProductServicesService) { }
  products: any;
  ngOnInit(): void {
    this.getproduct();
  }

  getproduct(){
    this.productService.getProducts().subscribe(prod =>{
      this.products=prod;
    },error=> console.error(error));
  }
}
