import { Component, OnInit } from '@angular/core';
import { FlightService } from '../../flight.service'
import {FormGroup, FormControl} from '@angular/forms'
import {formatDate} from '@angular/common'
import {Router} from '@angular/router'

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  currentDate = new Date()

  searchFlight = new FormGroup({
    from: new FormControl('New Delhi'),
    to: new FormControl('Mumbai'),
    date: new FormControl(formatDate(this.currentDate, 'yyyy-MM-dd', 'en'))
  })

  constructor(private flight:FlightService, private router:Router) { }
  cityList = <any>[]
  ngOnInit(): void {
    this.flight.getCities().subscribe((result)=>{
      this.cityList = result
      console.warn(result);
      
  })
  }
  flightSearch(){
    // this.flight.searchData(this.searchFlight.value)
    localStorage.setItem('searchQuery', JSON.stringify(this.searchFlight.value))
    this.router.navigateByUrl('/flights');
  }
}
