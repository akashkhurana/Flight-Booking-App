import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FlightService } from 'src/app/flight.service';
import { AllFlightsComponent } from './all-flights.component';
import { CommonModule } from '@angular/common';

describe('AllFlightsComponent', () => {
  let component: AllFlightsComponent;
  let fixture: ComponentFixture<AllFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CommonModule, HttpClientTestingModule],
      declarations: [ AllFlightsComponent ],
      providers: [FlightService]
    })
    .compileComponents().
    then(()=>{
      fixture = TestBed.createComponent(AllFlightsComponent)
      component = fixture.componentInstance
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
