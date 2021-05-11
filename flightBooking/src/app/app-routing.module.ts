import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AllFlightsComponent } from './admin/all-flights/all-flights.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { UsersComponent } from './admin/users/users.component';
import { AuthGuard } from './auth.guard';
import { BookingConfirmationComponent } from './user/booking-confirmation/booking-confirmation.component';
import { BookingDetailsComponent } from './user/booking-details/booking-details.component';
import { BookingSearchComponent } from './user/booking-search/booking-search.component';
import { CheckinComponent } from './user/checkin/checkin.component';
import { ContactusComponent } from './user/contactus/contactus.component';
import { FlightAvailableComponent } from './user/flight-available/flight-available.component';
import { FlightSearchComponent } from './user/flight-search/flight-search.component';
import { LoginComponent } from './user/login/login.component';
import { PaymentComponent } from './user/payment/payment.component';
import { SignupComponent } from './user/signup/signup.component';

const routes: Routes = [
  {
    component: BookingDetailsComponent,
    path: 'book',
    canActivate: [AuthGuard]
  },
  {
    component: BookingConfirmationComponent,
    path: 'confirm',
    canActivate: [AuthGuard]
  },
  {
    component: BookingSearchComponent,
    path: 'search',
    canActivate: [AuthGuard]
  },
  {
    component: FlightSearchComponent,
    path: ''
  },
  {
    component: CheckinComponent,
    path: 'checkin',
    canActivate: [AuthGuard]
  },
  {
    component: FlightAvailableComponent,
    path: 'flights',
  },
  {
    component: LoginComponent,
    path:'login'
  },
  {
    component: SignupComponent,
    path:'signup'
  },
  {
    component: ContactusComponent,
    path: 'contact'
  },
  {
    component: AdminPanelComponent,
    path:'admin',
    canActivate: [AuthGuard]
  },
  {
    component: AllFlightsComponent,
    path:'admin/flights',
    canActivate: [AuthGuard]
  },
  {
    component: BookingsComponent,
    path:'admin/bookings',
    canActivate: [AuthGuard]
  },
  {
    component: UsersComponent,
    path:'admin/users',
    canActivate: [AuthGuard]
  },
  {
    component: PaymentComponent,
    path:'checkout',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
