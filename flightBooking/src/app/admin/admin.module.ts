import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllFlightsComponent } from './all-flights/all-flights.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { BookingsComponent } from './bookings/bookings.component';
import { UsersComponent } from './users/users.component';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AllFlightsComponent,
    AdminPanelComponent,
    BookingsComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
