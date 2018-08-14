import { config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable()
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<string[]>(`${config.apiUrl}/users`);
    }
}
