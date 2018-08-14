import { config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sector } from '../models/sector';

@Injectable()
export class SectorService {

    constructor(private http: HttpClient) { }

    getSector() {
        return this.http.get<Sector[]>(`${config.apiUrl}/sectors`);
    }
}
