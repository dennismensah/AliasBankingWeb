import { Router } from '@angular/router';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { Injectable } from '@angular/core';


export function getClientSettings(): UserManagerSettings {
  return {
    authority: 'http://localhost:5000/',
    client_id: 'ng',
    // client_secret: 'secret',
    redirect_uri: 'http://localhost:4200/authcallback',
    post_logout_redirect_uri: 'http://localhost:4200/',
    // response_type: 'code id_token',
     response_type: 'id_token token',
    scope: 'openid profile AliasWebApi',
    filterProtocolClaims: true,
    loadUserInfo: true
  };
}

@Injectable({
  providedIn: 'root'
})

export class OidcService {

  private manager = new UserManager(getClientSettings());

  private user: User = null;

  constructor(private router: Router) {
    this.manager.getUser().then(user => {
      this.user = user;
    });
   }

  isLoggedIn(): boolean {
    return this.user != null && !this.user.expired;
  }

  getClaims(): any {
    return this.user.profile;
  }

  getAuthorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  getAccessToken(): string {
    return this.user.access_token;
  }

  accessTokenExists(): boolean {
    return this.user.access_token != null;
  }

  startAuthentication(): Promise<void> {
    return this.manager.signinRedirect();
  }

  completeAuthentication(): Promise<void> {
    return this.manager.signinRedirectCallback().then(user => {
      this.user = user;
    });
  }
}
