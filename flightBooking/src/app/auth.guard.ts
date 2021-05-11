import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean{
    let user = sessionStorage.getItem('user');
    if (this.auth.loggedIn()){
      return true
    } else{
      this.router.navigate(['/login'])
      return false
    }
  }
  
}
