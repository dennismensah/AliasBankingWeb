import { first } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Alerts } from '../../components/alerts';

declare var $: any;

@Component({
    selector: 'app-login-cmp',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    test: Date = new Date();
    private toggleButton: any;
    private sidebarVisible: boolean;
    private nativeElement: Node;
    submitted = false;
    loading = false;
    returnUrl: string;

    constructor(private element: ElementRef, private route: ActivatedRoute,
        private router: Router,  formBuilder: FormBuilder,
        private authenticationService: AuthenticationService) {
        if (this.authenticationService.isLoggedIn()) {
            this.router.navigate(['dashboard']);
        } else {
            this.nativeElement = element.nativeElement;
            this.sidebarVisible = false;
        }
        // this.nativeElement = element.nativeElement;
        // this.sidebarVisible = false;
    }

    ngOnInit() {
        /*this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });*/
        this.loginForm = new FormGroup({
            username:  new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
        });
        // reset login status
        if (!this.authenticationService.isLoggedIn) {
            this.authenticationService.logout();
        }

        // get return url from route parameters or default to '/'
         this.returnUrl = '/'; // this.route.snapshot.queryParams['returnUrl'] || '/';

        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        const body = document.getElementsByTagName('body')[0];
         body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        const card = document.getElementsByClassName('card')[0];
        setTimeout(function() {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    }
    sidebarToggle() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        const sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible === false) {
            setTimeout(function() {
                toggleButton.classList.add('toggled');
            }, 500);
             body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
             body.classList.remove('nav-open');
        }
    }
    ngOnDestroy() {
      const body = document.getElementsByTagName('body')[0];
       body.classList.remove('login-page');
       body.classList.remove('off-canvas-sidebar');
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
         this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    switch (error.status) {
                        case 400:
                            alert(error['error'])
                            break;
                        case 500:
                            alert('There was an error logging in.');
                            break;
                    }
                    this.loading = false;
                });
    }
}
