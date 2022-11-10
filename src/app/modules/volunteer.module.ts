import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VolunteerDetailsComponent } from "./volunteer-module/volunteer-details/volunteer-details.component";
import { VolunteerListComponent } from "./volunteer-module/volunteer-list/volunteer-list.component";
import { VolunteerService } from "./volunteer-module/volunteer.service";

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
    declarations: [VolunteerDetailsComponent, VolunteerListComponent],
    exports: [VolunteerDetailsComponent, VolunteerListComponent],
    providers: [VolunteerService]
}) 
export class VolunteerModule {

}

