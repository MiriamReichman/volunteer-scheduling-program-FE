import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SchedulingComponent } from "./scheduling-module/scheduling/scheduling.component"
import { SchedulingService } from "./scheduling-module/SchedulingService"

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule, RouterModule],
    declarations: [SchedulingComponent],
    exports: [SchedulingComponent ],
    providers: [SchedulingService]
})

export class ScheduleModule {

}