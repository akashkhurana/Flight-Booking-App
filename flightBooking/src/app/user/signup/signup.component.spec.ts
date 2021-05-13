import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
import{FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { SignupComponent } from './signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule,CommonModule, HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [ SignupComponent ],
      providers: [ Router, AuthService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('form invalid when empty', () => {
    expect(component.registerUserData.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.registerUserData.controls.email;
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    expect (email.hasError('required')).toBeTruthy();
    // email.setValue("")

  });


});
