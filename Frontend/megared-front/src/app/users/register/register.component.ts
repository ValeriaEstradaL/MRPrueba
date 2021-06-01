import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userRegisterModel } from 'src/app/models/userRegister.model';
import { RegisterServicesService } from 'src/app/services/register/register-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,private registerService: RegisterServicesService,private router: Router ) {

    this.form=this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]

    });
   }

  ngOnInit(): void {
  }
  registerUser(){
    const user: userRegisterModel={
      name: this.form.value.name,
      email: this.form.value.email,
      password: this.form.value.password,
      password_confirmation: this.form.value.password_confirmation,
    }
    this.registerService.registerUser(user).subscribe(() => {
      this.router.navigate(['/products'])
    }, (error) => console.error(error));

  }
  }

