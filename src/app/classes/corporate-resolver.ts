import { CorporateService } from './../services/corporate.service';
import { Observable } from 'rxjs';
import { Corporate } from './../models/corporate';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class CorporateResolver {
    constructor(private corporateService: CorporateService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Corporate> | Promise<Corporate> | Corporate {

        return this.corporateService.getCorporate(+route.params['id']);
    }
}
