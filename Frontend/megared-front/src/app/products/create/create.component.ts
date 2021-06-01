import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { productModel } from 'src/app/models/product.model';
import { ProductServicesService } from 'src/app/services/products/product-services.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form:FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductServicesService, private router: Router) {
    this.form=this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      base_price: ['', Validators.required],
      taxes: ['', Validators.required],
      state: ['', Validators.required],
      stock: ['', Validators.required]
    })
   }

  ngOnInit(): void {

  }

  productFormGroup: FormGroup;



  createProduct() {
    const product: productModel={
      name: this.form.value.name,
      description: this.form.value.description,
      base_price: this.form.value.base_price,
      taxes: this.form.value.taxes,
      state: this.form.value.state,
      stock: this.form.value.stock,
    }

    this.productService.createProducts(product).subscribe(() => {
      this.router.navigate(['/products'])
    }, (error) => console.error(error));

  }
}

