import { IndividualService } from './../services/individual.service';
import { Observable } from 'rxjs';
import { Individual } from './../models/Individual';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '../../../node_modules/@angular/core';

@Injectable()
export class IndividualResolver implements Resolve<Individual> {
    constructor(private individualService: IndividualService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Individual> | Promise<Individual> | Individual {

       return this.individualService.getIndividual(+route.params['id']);
    }
}
