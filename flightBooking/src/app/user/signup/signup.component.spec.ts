import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import {AuthService} from '../../auth.service';
import{FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms'
import { SignupComponent } from './signup.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientTestingModule],
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
    let email = component.registerUserData.controls['email'];
    expect(email.valid).toBeFalsy();
    expect(email.pristine).toBeTruthy();
    
    // email.setValue("test")
    // errors =email.errors
    // expect errors['required'].toBeTruthy();

  });
});
