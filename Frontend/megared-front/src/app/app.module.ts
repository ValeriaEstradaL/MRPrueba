import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { HomeComponent } from './template/home/home.component';
import { AdminComponent } from './users/admin/admin.component';
import { CreateComponent } from './products/create/create.component';
import { EditComponent } from './products/edit/edit.component';
import { IndexComponent } from './products/index/index.component';
import { DeleteComponent } from './products/delete/delete.component';
import { HttpClientModule } from '@angular/common/http';

import {ReactiveFormsModule} from '@angular/forms';
import { ProductServicesService } from './services/products/product-services.service';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AdminComponent,
    CreateComponent,
    EditComponent,
    IndexComponent,
    DeleteComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,

    ReactiveFormsModule,

  ],
  providers: [
    ProductServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
