import { Observable } from 'rxjs/Observable';
import { Individual } from './../models/Individual';
import {  config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    })
};

@Injectable()
export class IndividualService {
    constructor(private http: HttpClient) { }

    getIndividual(id: number): Observable<Individual> {
        return this.http.get<Individual>(`${config.apiUrl}/individuals/${id}`);
    }

    getIndividualNames(): Observable<string[]> {
        return this.http.get<string[]>(`${config.apiUrl}/individuals/names`);
    }

    updateIndividual(id: number, individual: Individual) {
        return this.http.put<Individual>(`${config.apiUrl}/individuals/${id}`, individual);
    }

    getIndividuals() {
        return this.http.get<Individual[]>(`${config.apiUrl}/individuals`);
    }

    getIndividualSummary() {
        return this.http.get(`${config.apiUrl}/individuals/summary`);
    }

    addIndividual(individual) {
        return this.http.post(`${config.apiUrl}/individuals`, individual, httpOptions);
    }
}
