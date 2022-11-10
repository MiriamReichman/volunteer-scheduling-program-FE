import { Component, OnInit } from '@angular/core';
import { SchedulingService } from '../SchedulingService';
import { ActivatedRoute, Router } from '@angular/router';
import { Volunteer } from "../../volunteer-module/models/volunteer.model";
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.css']
})
export class SchedulingComponent implements OnInit {
  PotentionalVolunteer: Volunteer[][] = [];
  placedVolunteer: Volunteer[] = [];
 day: any[] = [];
  myGroup: FormGroup;

  getPotentionalVolunteer(day: number) {

    this._schedulingService.getVolunteerFromSeverByDay(day).subscribe(data => {
      this.PotentionalVolunteer[day] = data
    });
  }
 
  SaveSchedule() {
    this.day = [this.myGroup.controls.sunday, 
      this.myGroup.controls.monday,
    this.myGroup.controls.tuesday,
     this.myGroup.controls.wensday,
    this.myGroup.controls.thursday, 
    this.myGroup.controls.friday, 
    this.myGroup.controls.shabbes]
    //נעבור על המערך של הימים מי נבחר בכל יום כדי להכיל את האובייקט כולו ולא רק את השם
    for (var i = 0; i < 7; i++) {
      this.PotentionalVolunteer[i].forEach(element => {
        if (element.firstName == this.day[i].value) {
          this.placedVolunteer[i] = element;
          return
        }
      })
    };
    alert("complited sucssefuly");


    this._schedulingService.putSaveSchedule(this.placedVolunteer).subscribe();
    console.log(this.placedVolunteer)
  }

  constructor(private _schedulingService: SchedulingService, private router: ActivatedRoute) {
 
    this.myGroup = new FormGroup({
      "sunday": new FormControl(""),
      "monday": new FormControl(""),
      "tuesday": new FormControl(""),
      "wensday": new FormControl(""),
      "thursday": new FormControl(""),
      "friday": new FormControl(""),
      "shabbes": new FormControl("")
    });
    for (var i = 0; i < 7; i++) {
      this.getPotentionalVolunteer(i);
    }

  }
  ngOnInit(): void {
    this._schedulingService.getSchedule().subscribe(data => {
      this.placedVolunteer = data;
      this.myGroup.controls["sunday"].setValue(this.placedVolunteer[0]?.firstName);
      this.myGroup.controls["monday"].setValue(this.placedVolunteer[1]?.firstName);
      this.myGroup.controls["tuesday"].setValue(this.placedVolunteer[2]?.firstName);
      this.myGroup.controls["wensday"].setValue(this.placedVolunteer[3]?.firstName);
      this.myGroup.controls["thursday"].setValue(this.placedVolunteer[4]?.firstName);
      this.myGroup.controls["friday"].setValue(this.placedVolunteer[5]?.firstName);
      this.myGroup.controls["shabbes"].setValue(this.placedVolunteer[6]?.firstName);})
  }
  }
