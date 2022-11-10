import { Component, OnInit } from '@angular/core';
import { VolunteerService } from '../volunteer.service';
import { Volunteer } from '../models/volunteer.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-volunteer-list',
  templateUrl: './volunteer-list.component.html',
  styleUrls: ['./volunteer-list.component.css']
})
export class VolunteerListComponent implements OnInit {
  Volunteeres: Volunteer[] = [];

  constructor(private _volunteerService: VolunteerService) {

    this._volunteerService.getVolunteerFromSever().subscribe(data => {
      this.Volunteeres = data;
    })
  }


  ngOnInit(): void {
  }

}
