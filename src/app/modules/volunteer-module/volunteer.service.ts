import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Volunteer } from "./models/volunteer.model";

@Injectable()
export class VolunteerService {

    getVolunteerFromSever(): Observable<Volunteer[]> {
        return this._http.get<Volunteer[]>("/api/Volunteers");
    }
    getVolunteerFromSeverById(id: number): Observable<Volunteer> {
        return this._http.get<Volunteer>("/api/Volunteers/GetByID/?id=" + id);
    }
    putSaveVolunteer(toSave: Volunteer): Observable<boolean> {
        return this._http.put<boolean>("/api/Volunteers/SaveUpdate", toSave);
    }
    constructor(private _http: HttpClient) {
    }
}