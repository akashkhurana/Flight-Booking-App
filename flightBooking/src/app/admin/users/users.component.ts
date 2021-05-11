import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FlightService } from 'src/app/flight.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private flight:FlightService) { }
  userList = <any>[];
  ngOnInit(): void {
    this.flight.allUsers().subscribe((result:any)=>{
      this.userList =result
      console.warn(this.userList);
      
    })
  }

}
