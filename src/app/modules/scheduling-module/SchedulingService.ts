import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Volunteer } from "../volunteer-module/models/volunteer.model";
@Injectable()
export class SchedulingService{
    getVolunteerFromSeverByDay(day: number): Observable<Volunteer[]> {
        return this._http.get<Volunteer[]>("/api/Volunteers/GetByDay/?day=" + day);
    }
    putSaveSchedule(placedVolunteer:Volunteer[]) :Observable<void> {
        return this._http.put<void>("/api/Volunteers/SaveSchedule",placedVolunteer);
    }
    getSchedule():Observable<Volunteer[]>{
        return this._http.get<Volunteer[]>("/api/Volunteers/GetSchedule");
    }
  
    constructor(private _http: HttpClient) {
    }
}