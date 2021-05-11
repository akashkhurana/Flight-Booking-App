import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FlightService } from 'src/app/flight.service';

import { FlightAvailableComponent } from './flight-available.component';

describe('FlightAvailableComponent', () => {
  let component: FlightAvailableComponent;
  let fixture: ComponentFixture<FlightAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, CommonModule, HttpClientTestingModule],
      declarations: [ FlightAvailableComponent ],
      providers: [FlightService]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(FlightAvailableComponent)
      component = fixture.componentInstance
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
