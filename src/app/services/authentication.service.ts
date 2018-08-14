import { Router } from '@angular/router';
import { config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import * as jwt_decode from 'jwt-decode';
import 'rxjs/add/operator/map'

export interface Token {
    UserId: string;
    FullName: string;
}

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient, private router: Router) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${config.apiUrl}/login`, { username: username, password: password })
            .map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.Access_Token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    sessionStorage.setItem('currentUser', JSON.stringify(user.Access_Token));
                    sessionStorage.setItem('sessionDate', JSON.stringify(user.SessionDate));
                }
                return user;
            });
    }

    getSessionDate() {
        return JSON.parse(sessionStorage.getItem('sessionDate'));
    }

    getAccessToken() {
        return JSON.parse(sessionStorage.getItem('currentUser'));
    }

    getUserId(): number {
        return +(JSON.parse(JSON.stringify((jwt_decode(sessionStorage.getItem('currentUser'))).UserId)));
    }

    getFullName() {
        return JSON.parse(JSON.stringify((jwt_decode(sessionStorage.getItem('currentUser'))).FullName));
    }

    getImageName() {
        return JSON.parse(JSON.stringify((jwt_decode(sessionStorage.getItem('currentUser'))).ImageUrl));
    }

    isLoggedIn() {
        return sessionStorage.getItem('currentUser') === null ? false : true;
    }

    logout() {
        // remove user from local storage to log user out
        this.http.post(`${config.apiUrl}/logout`, null).subscribe(
            res => {
                sessionStorage.removeItem('currentUser'),
                    this.router.navigate(['/login'])
            },
            error => {}// alert(error)
        );
    }
}
