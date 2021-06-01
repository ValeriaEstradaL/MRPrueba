import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './products/create/create.component';
import { IndexComponent } from './products/index/index.component';
import { AdminComponent } from './users/admin/admin.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';

const routes: Routes = [
  {
    path: 'users',
    component: AdminComponent

  },

  {
    path: 'products',
    component: IndexComponent

  },
  {
    path: 'products/create',
    component: CreateComponent

  },
  {
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'register',
    component: RegisterComponent

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
