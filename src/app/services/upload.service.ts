import { config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class UploadService {

    constructor(private http: HttpClient) { }

    upload(file, filetype) {
        const req = new HttpRequest('POST', `${config.apiUrl}/upload/${filetype}` , file, {
            reportProgress: true
        });
    }
}
