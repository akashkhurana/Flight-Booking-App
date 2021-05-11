import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/flight.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {formatDate} from '@angular/common'

@Component({
  selector: 'app-all-flights',
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent implements OnInit {
  showaddForm: boolean = false;
  currentDate = new Date()
  alert: boolean = false
  
  flightDetails = new FormGroup({
    airline: new FormControl('', Validators.required),
    flightNo: new FormControl('',Validators.required),
    from : new FormControl('New Delhi',Validators.required),
    to: new FormControl('Mumbai',Validators.required),
    date: new FormControl(formatDate(this.currentDate, 'yyyy-MM-dd', 'en'),Validators.required),
    tickets: new FormControl('',Validators.required),
    fare: new FormControl('',Validators.required)
  })

  constructor(private flight:FlightService) { }
  flightList= <any>[]
  cityList = <any>[]


  ngOnInit(): void {
    this.flight.allFlights().subscribe((result:any)=>{
      this.flightList =result
      console.warn(result)
    })
    this.flight.getCities().subscribe((result)=>{
      this.cityList = result
  })
  }

  deleteId:any
  
  deleteFlight(id:any){
    this.deleteId = id
    console.warn(this.deleteId); 
  }

  confirmDelete(){
    this.flightList = this.flightList.filter((item:any) => item.id !== item)
    this.flight.deleteFlight(this.deleteId).subscribe((result:any)=>{
      window.location.reload()
    })
  }

  saveFlight(){
    console.warn(this.flightDetails.value);
    this.flight.addFlight(this.flightDetails.value).subscribe((result)=>{
      this.alert=true
    })
  }
  
  updateFlight(){

  }

}
