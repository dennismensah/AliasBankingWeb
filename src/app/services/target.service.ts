import { config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Target } from '../models/target';

@Injectable()
export class TargetService {

    constructor(private http: HttpClient) { }

    getTarget() {
        return this.http.get<Target[]>(`${config.apiUrl}/targets`);
    }
}
