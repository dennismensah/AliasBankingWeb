import { AuthenticationService } from '../services/authentication.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { Alerts } from '../components/alerts';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(public authService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const authtoken = this.authService.getAccessToken();
        request = request.clone({
            setHeaders: {
                'Content-Type' : 'application/json',
                 Authorization: `Bearer ${authtoken}`// 'Bearer ' + authtoken
            }
        });
        return next.handle(request);
            // .do(/*event => this.handleResponse(request, event),*/
               // error => this.handleError(request, error));
        // return next.handle(request);
    }

    /*handleResponse(req: HttpRequest<any>, event) {
        console.log('Handling response for ', req.url, event);
        if (event instanceof HttpResponse) {
            console.log('Request for ', req.url,
                ' Response Status ', event.status,
                ' With body ', event.body);
        }
    }*/

    handleError(req: HttpRequest<any>, event) {
        switch (event.status) {
            case 400:
                Alerts.showErrorSweetAlert('Unsuccessful',  'The request was invalid.')
                break;
            case 401:
                Alerts.showErrorSweetAlert('Unsuccessful', 'You are not authorized to access this resource.')
                break;
            case 500:
                Alerts.showErrorSweetAlert('Unsuccessful', 'There was an error processing the request.')
                break;
            default:
                break;
        }

        /*console.error('Request for ', req.url,
            ' Response Status ', event.status,
            ' With error ', event.error);*/
    }
}
