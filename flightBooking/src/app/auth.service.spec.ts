import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { from } from 'rxjs';
import { TokenInterceptorService } from './token-interceptor.service';
import { RouterTestingModule } from '@angular/router/testing';
import { CommonModule } from '@angular/common';

describe('AuthService', () => {
  let service: AuthService,
  httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,CommonModule, RouterTestingModule],
      providers:[TokenInterceptorService, AuthService]
    });
    service = TestBed.inject(AuthService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should register user', () => {
    expect(service).toBeTruthy();
  });
});
