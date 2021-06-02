import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/admin/user-services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private adminUserService:UserServicesService) { }
  users:any;
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.adminUserService.getUsers().subscribe(user=>{
      this.users=user;

    }, error => console.log(error));
  }

}
