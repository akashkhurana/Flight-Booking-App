import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
import{FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', Validators.required),
  })

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    this.auth.loginUser(this.loginUserData.value)
    .subscribe(
      (res:any) => {
        console.log(res)
      localStorage.setItem('token', res.token)
    },
      err => console.log(err)
    )
    sessionStorage.setItem("user", this.loginUserData.value.email);
    if(this.loginUserData.value.email == "admin@flight.com"){
      this.router.navigate(['/admin']);
    } else { 
      this.router.navigate(['/']);
    } 
  }

  authenticateUser(email:any){
    
  }
}
