import { Observable } from 'rxjs/Observable';
import { config } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable()
export class FileService {

    constructor(private http: HttpClient) { }

    uploadFile(type: string, file: any) {
        return this.http.post(`${config.apiUrl}/${type}`, file);
    }
}
