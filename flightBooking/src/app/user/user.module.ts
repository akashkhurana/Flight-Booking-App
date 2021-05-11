import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightAvailableComponent } from './flight-available/flight-available.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingConfirmationComponent } from './booking-confirmation/booking-confirmation.component';
import { BookingSearchComponent } from './booking-search/booking-search.component';
import { CheckinComponent } from './checkin/checkin.component';
import {RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { PaymentComponent } from './payment/payment.component';
import { GooglePayButtonModule } from '@google-pay/button-angular'

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightAvailableComponent,
    BookingDetailsComponent,
    BookingConfirmationComponent,
    BookingSearchComponent,
    CheckinComponent,
    LoginComponent,
    SignupComponent,
    ContactusComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    GooglePayButtonModule
  ]
})
export class UserModule { }
