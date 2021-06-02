import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { adminUserModel } from 'src/app/models/adminUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  constructor(private http:HttpClient) {   }
  private api_url="http://localhost:8000/api/v1/admin/users";

  getUsers():Observable<adminUserModel[]>{
    return this.http.get<adminUserModel[]>(this.api_url);
  }
}
