import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { GooglePayButtonModule } from '@google-pay/button-angular'


declare var Razorpay:any

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  flightDetails = JSON.parse(localStorage.getItem('flightData')||'{}')

  bookingData = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    flightNo: new FormControl(this.flightDetails.flightNo),
    from: new FormControl(this.flightDetails.from),
    to: new FormControl(this.flightDetails.to),
    date: new FormControl(this.flightDetails.date)
  })

  constructor(private flight: FlightService, private router:Router) { }

  ngOnInit(): void {
  }
  submitData(){
    localStorage.setItem('bookingDetails', JSON.stringify(this.bookingData.value))
    this.router.navigateByUrl('/checkout');
  }
  

}
