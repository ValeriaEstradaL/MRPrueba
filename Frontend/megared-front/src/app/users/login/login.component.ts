import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { userLoginModel } from 'src/app/models/userLogin.model';
import { LoginServicesService } from 'src/app/services/login/login-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,private loginService: LoginServicesService, private router:Router) {
    this.form=this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]})

  }

  ngOnInit(): void {
  }
getAuth(){
  const user: userLoginModel={
    email:this.form.value.email,
    password: this.form.value.password,
  }
  this.loginService.getAuthorization(user).subscribe(() => {
    this.router.navigate(['/products'])
  }, (error) => console.error(error));

}
}
