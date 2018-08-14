import { Observable } from 'rxjs/Observable';
import { Corporate } from './../models/corporate';
import { config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
};

@Injectable()
export class CorporateService {

    constructor(private http: HttpClient) { }

    getCorporate(id: number): Observable<Corporate> {
        return this.http.get<Corporate>(`${config.apiUrl}/corporates/${id}`);
    }

    updateCorporate(id: number, corporate: Corporate) {
        return this.http.put<Corporate>(`${config.apiUrl}/corporates/${id}`, corporate);
    }

    getcorporates() {
        return this.http.get(`${config.apiUrl}/corporates`);
    }

    addCorporate(corporate) {
        return this.http.post(`${config.apiUrl}/corporates`, corporate, httpOptions);
    }
}
