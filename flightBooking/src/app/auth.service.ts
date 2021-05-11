import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import {Router} from '@angular/router'
import { Route } from '@angular/compiler/src/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://localhost:3100/api/register"
  private loginUrl = "http://localhost:3100/api/login"
  constructor(private http: HttpClient, private router:Router) { }
    
    registerUser(user:any){
        return this.http.post(this.registerUrl, user)
      }

    loginUser(user:any){
      return this.http.post(this.loginUrl, user)
    }

    loggedIn(){
      return !!localStorage.getItem('token')
    }

    logoutUser(){
      localStorage.removeItem('token')
      this.router.navigate(['/'])
    }

    getToken(){
      return localStorage.getItem('token')
    }
}
