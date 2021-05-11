import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {

  constructor(private flight:FlightService) { }
  bookingList= <any>[]
  ngOnInit(): void {
    this.flight.allBookings().subscribe((result:any)=>{
      this.bookingList =result
    })
  }

}
