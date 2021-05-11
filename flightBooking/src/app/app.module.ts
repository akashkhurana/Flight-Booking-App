import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserModule} from './user/user.module'
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import {TokenInterceptorService} from './token-interceptor.service'
import { AdminModule } from './admin/admin.module';


  

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    UserModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [AuthService, AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
