import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userRegisterModel } from 'src/app/models/userRegister.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterServicesService {

  constructor(private http: HttpClient) { }
  private api_url="http://localhost:8000/api/v1/register";
  registerUser(user: userRegisterModel){
    return this.http.post(this.api_url,user);

  }
}
