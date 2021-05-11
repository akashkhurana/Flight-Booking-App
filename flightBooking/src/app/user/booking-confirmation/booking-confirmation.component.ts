import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {
  bookingDetails = JSON.parse(localStorage.getItem('bookingDetails')||'{}')

  constructor(private flight: FlightService) { }

  ngOnInit(): void {
  }

}
