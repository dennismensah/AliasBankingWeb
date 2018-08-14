import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OidcService } from '../services/oidc.service';

@Injectable()
export class AuthGuard implements CanActivate {

   /* constructor(private authService: OidcService) { }

    canActivate(): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        }

        this.authService.startAuthentication();
        return false;
    }*/


    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (sessionStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']/*, { queryParams: { returnUrl: state.url } }*/);
        return false;
}
}
