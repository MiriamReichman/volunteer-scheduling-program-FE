import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SchedulingComponent } from './modules/scheduling-module/scheduling/scheduling.component';
import { VolunteerListComponent } from './modules/volunteer-module/volunteer-list/volunteer-list.component';
import { VolunteerDetailsComponent } from './modules/volunteer-module/volunteer-details/volunteer-details.component';
import { RouterModule, Routes } from '@angular/router';
import { VolunteerService } from './modules/volunteer-module/volunteer.service';
import { FormStyle } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SchedulingService } from './modules/scheduling-module/SchedulingService';
import { VolunteerModule } from './modules/volunteer.module';
import { ScheduleModule } from './modules/schedule.module';

const routes: Routes = [
  { path: "volunteer", component: VolunteerListComponent },
  { path: "schedule", component: SchedulingComponent },
  { path: "volunteer/details", component: VolunteerDetailsComponent },
  { path: "volunteer/details/GetByID/:id", component: VolunteerDetailsComponent },
  { path: "volunteer/SaveUpdate/:volunteer", component: VolunteerListComponent },
  { path: "api/Volunteers/GetSchedule", component: SchedulingComponent }

];
@NgModule({
  declarations: [
    AppComponent,
 
  ],
  imports: [
    VolunteerModule,
    ScheduleModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule
  ],
   providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
