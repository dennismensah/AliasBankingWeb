import { config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) { }

    getCountry() {
        return this.http.get<Country[]>(`${config.apiUrl}/countrylists`);
    }
}
