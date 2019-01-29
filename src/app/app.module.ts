import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPwdComponent } from './components/forgot-pwd/forgot-pwd.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './service/auth.service';
import { AuthGuard } from './service/auth.guard';

import { ProfileComponent } from './components/profile/profile.component';

import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    InventoryComponent,
    RegisterComponent,
    ForgotPwdComponent,
    ProfileComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
  HttpClientModule,
  ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'inventory',
        component: InventoryComponent
      },
	   {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      { path: '**', redirectTo: '' }
	  
    ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
