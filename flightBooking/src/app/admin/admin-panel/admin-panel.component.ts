import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';
import {RouterModule} from '@angular/router';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  constructor(private flight:FlightService) { }
  bookingList= <any>{}
  flightList=<any>{}
  ngOnInit(): void {
    this.flight.allBookings().subscribe((result)=>{
      this.bookingList =result
    })
    this.flight.allFlights().subscribe((result)=>{
      this.flightList =result
    })
  }

}
