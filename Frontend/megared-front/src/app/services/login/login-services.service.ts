import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userLoginModel } from 'src/app/models/userLogin.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(private http:HttpClient) { }

private api_url="http://localhost:8000/api/v1/auth/login";

getAuthorization(user: userLoginModel){
  return this.http.post(this.api_url,user);

}
}
