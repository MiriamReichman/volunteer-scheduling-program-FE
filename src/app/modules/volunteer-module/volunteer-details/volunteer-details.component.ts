import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Volunteer } from '../models/volunteer.model';
import { VolunteerService } from '../volunteer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-volunteer-details',
  templateUrl: './volunteer-details.component.html',
  styleUrls: ['./volunteer-details.component.css']
})
export class VolunteerDetailsComponent implements OnInit {

  newVolunteer: Volunteer = new Volunteer();

  public volunteerForm: FormGroup;

  SaveChange() {

    this.newVolunteer.firstName = this.volunteerForm.controls['firstName'].value
    this.newVolunteer.lastName = this.volunteerForm.controls['lastName'].value
    this.newVolunteer.active = this.volunteerForm.controls['active'].value
    this.newVolunteer.days = [this.volunteerForm.controls['sunday'].value, this.volunteerForm.controls['monday'].value,
    this.volunteerForm.controls['tuesday'].value, this.volunteerForm.controls['wensday'].value, this.volunteerForm.controls['thursday'].value,
    this.volunteerForm.controls['friday'].value
      , this.volunteerForm.controls['shabbes'].value];


    console.log(this.newVolunteer)

    this.VolunteerService.putSaveVolunteer(this.newVolunteer).subscribe(sec => {
      if (sec == true){
        alert("עבר בהצלחה!")
        this.route.navigate(['volunteer/SaveUpdate/{{newVolunteer}}']);
     
      }
      else{
        alert("נכשל יש להסיר שיבוץ קודם.")
        this.route.navigate(['schedule']);}
    });


  }
  constructor(private VolunteerService: VolunteerService, router: ActivatedRoute,private route:Router) {


    this.volunteerForm = new FormGroup({
      'id': new FormControl(0, [Validators.required, Validators.minLength(3)]),
      "firstName": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "lastName": new FormControl("", [Validators.required, Validators.minLength(3)]),
      "active": new FormControl(""),
      "sunday": new FormControl(""),
      "monday": new FormControl(""),
      "tuesday": new FormControl(""),
      "wensday": new FormControl(""),
      "thursday": new FormControl(""),
      "friday": new FormControl(""),
      "shabbes": new FormControl(""),

    });
    router.paramMap.subscribe(param => {

      let volunteerId = +(Number)(param.get('id'))

      VolunteerService.getVolunteerFromSeverById(volunteerId).subscribe(
        data => {

          this.newVolunteer = data;
          this.volunteerForm.controls['id'].setValue(data.id)
          this.volunteerForm.controls['firstName'].setValue(data.firstName)
          this.volunteerForm.controls['lastName'].setValue(data.lastName)
          this.volunteerForm.controls['active'].setValue(data.active)
          this.volunteerForm.controls['sunday'].setValue(data.days[0])
          this.volunteerForm.controls['monday'].setValue(data.days[1])
          this.volunteerForm.controls['tuesday'].setValue(data.days[2])
          this.volunteerForm.controls['wensday'].setValue(data.days[3])
          this.volunteerForm.controls['thursday'].setValue(data.days[4])
          this.volunteerForm.controls['friday'].setValue(data.days[5])
          this.volunteerForm.controls['shabbes'].setValue(data.days[6])


        }

      )
    })

  }

  ngOnInit(): void {

  }

}
