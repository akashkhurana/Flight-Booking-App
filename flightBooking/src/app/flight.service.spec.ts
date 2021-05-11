import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpParams} from '@angular/common/http'
import { TestBed } from '@angular/core/testing'; 
import { FlightService, } from './flight.service';
import { from } from 'rxjs';

describe('FlightService', () => {
  let service: FlightService, 
  httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:[
        FlightService, HttpClientTestingModule
      ]
    });
    service = TestBed.inject(FlightService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should retrieve all cities', () => {
    service.getCities().subscribe(cities =>{
      expect(cities).toBeTruthy('No cities returned');
      expect(cities.length).toBe(8, "incorrect number of cities")
      const city = cities.find(
        (city:any)=>
            city._id =="60900027c7f790cc39a81bad")
    });

    const req = httpTestingController.expectOne(service.cityListUrl);
    expect(req.request.method).toEqual("GET")
  });

  it('should retrieve all flights', ()=>{
    service.allFlights().subscribe(flights=>{
      expect(flights).toBeTruthy("No flights returned");
      const flight = flights.find(
        (flight:any)=>
            flight._id == "6098b1232fb4c96f6823be8c")
    })
    const req = httpTestingController.expectOne(service.flightListUrl);
    expect(req.request.method).toEqual("GET")
  })
  
  it('should retrieve all bookings', ()=>{
    service.allBookings().subscribe(bookings=>{
      expect(bookings).toBeTruthy("No bookings returned");
      const flight = bookings.find(
        (booking:any)=>
            booking._id == "6098b1eeafcc7b0b607c9f47")
    })
    const req = httpTestingController.expectOne(service.bookingListUrl);
    expect(req.request.method).toEqual("GET")
  })

  it('should retrieve all users', ()=>{
    service.allUsers().subscribe(users=>{
      expect(users).toBeTruthy("No users returned");
      const flight = users.find(
        (user:any)=>
            user._id == "608d91c7b3658a499ccc43cd")
    })
    const req = httpTestingController.expectOne(service.allUserUrl);
    expect(req.request.method).toEqual("GET")
  })
  
  it('should find a list of flights', ()=>{
    service.getFlights().subscribe(flights=>{
      expect(flights).toBeTruthy("No search results");
    })
    localStorage.setItem('searchQuery', JSON.stringify({from:"New Delhi", to:"Mumbai", date:"2021-05-10"}))
    const req = httpTestingController.expectOne("http://localhost:3200/flight/search?from=New%20Delhi&to=Mumbai&date=2021-05-10");
    expect(req.request.method).toEqual("GET")
  })

  afterEach(() =>{
    httpTestingController.verify()
  })
});
