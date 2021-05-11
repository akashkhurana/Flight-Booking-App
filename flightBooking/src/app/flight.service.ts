import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';

function _window() : any {
  return window;
}


@Injectable({
  providedIn: 'root'
})
export class FlightService {
  cityListUrl = "http://localhost:3200/flight/cities"
  flightListUrl = "http://localhost:3200/flight/all"
  flightSearchUrl = "http://localhost:3200/flight/search"
  bookingUrl = "http://localhost:3000/booking/add"
  bookingListUrl = "http://localhost:3000/booking/all"
  allUserUrl = "http://localhost:3100/api/all"
  addFlightUrl="http://localhost:3200/flight/add"
  deleteFlightUrl = "http://localhost:3200/flight/delete"
  query:any = JSON.parse(localStorage.getItem('searchQuery')||'{}')

  get nativeWindow():any{
    return _window;
  }

  constructor(private http:HttpClient) { }
  getCities(){
    return this.http.get<any>(this.cityListUrl)  
  }

  allFlights(){
     return this.http.get<any>(this.flightListUrl)
  }

  allBookings(){
    return this.http.get<any>(this.bookingListUrl)
  }

  allUsers(){
    return this.http.get<any>(this.allUserUrl)
  }

  getFlights(){
    const params = new HttpParams()
    .set('from', this.query.from)
    .set('to', this.query.to)
    .set('date', this.query.date)
    const searchUrl = `${this.flightSearchUrl}?${params.toString()}`
    return this.http.get<any>(searchUrl)
    // return this.http.get<any>(this.flightListUrl)
  }

  getSelectedFlightDetails(data:any){
    console.warn(localStorage.getItem('selectedFlight'))
  }

  submitBookingDetails(data:any){
    localStorage.setItem('bookingDetails', JSON.stringify(data))
    // return this.http.post(this.bookingUrl, data)
  }

  addFlight(data:any){
    return this.http.post(this.addFlightUrl, data)
  }

  deleteFlight(id:Number){
    return this.http.delete(`${this.deleteFlightUrl}/${id}`)
  }
}
