import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {FlightService} from '../../flight.service'

@Component({
  selector: 'app-flight-available',
  templateUrl: './flight-available.component.html',
  styleUrls: ['./flight-available.component.css']
})
export class FlightAvailableComponent implements OnInit {
  constructor(private flight:FlightService) { }
  flightList= <any>[]
  ngOnInit(): void {
    this.flight.getFlights().subscribe((result)=>{
      this.flightList =result
    })

  }
  selectedflight(item:any){
    localStorage.setItem('flightData', JSON.stringify(item))
  }

}
