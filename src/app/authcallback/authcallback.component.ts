import { OidcService } from '../services/oidc.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authcallback',
  templateUrl: './authcallback.component.html',
  styleUrls: ['./authcallback.component.scss']
})
export class AuthcallbackComponent implements OnInit {

  constructor(private authService: OidcService, private router: Router) {
   }

  ngOnInit() {
    this.authService.completeAuthentication();
    this.router.navigate(['/']);
  }

}
