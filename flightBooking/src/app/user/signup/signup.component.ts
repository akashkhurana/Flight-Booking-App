import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
import{FormControl, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerUserData =  new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', Validators.required),
    })
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    this.auth.registerUser(this.registerUserData.value)
    .subscribe(
      (res:any) => {
        this.router.navigate(['/login'])
        alert("You have been successfully registered")
      },
      err => console.log(err)
    )
  }
}
