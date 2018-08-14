import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { config } from 'environments/environment';
import * as jwt_decode from 'jwt-decode';

declare const $: any;

// Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        type: 'link',
        icontype: 'dashboard'
    },
    {
        path: '/customer',
        title: 'Customer',
        type: 'link',
        icontype: 'supervisor_account',
        /*collapse: 'customer',
        children: [
            { path: 'customerlist', title: 'Customer List', ab: 'CL' },
            { path: 'enquiry', title: 'Enquiry', ab: 'E' },
            { path: 'report', title: 'Report', ab: 'R' },
            { path: 'setup', title: 'Setup', ab: 'S' }
        ]*/
    },
    {
        path: '/account',
        title: 'Account',
        type: 'sub',
        icontype: 'apps',
        collapse: 'account',
        children: [
            { path: 'accountlist', title: 'Account List', ab: 'AL' },
            { path: 'accountsmanager', title: 'Accounts Manager', ab: 'AM' },
            { path: 'investmentmanager', title: 'Investment Manager', ab: 'IM' },
            { path: 'report', title: 'Report', ab: 'R' },
            { path: 'setup', title: 'Setup', ab: 'S' },
            { path: 'teller', title: 'Teller', ab: 'T' },
            { path: 'treasury', title: 'Treasury', ab: 'TR' }
        ]
    },
    {
        path: '/loans',
        title: 'Loans',
        type: 'sub',
        icontype: 'account_balance',
        collapse: 'loans',
        children: [
            {path: 'application', title: 'Application', ab: 'A'},
            {path: 'approval', title: 'Approval', ab: 'AP'},
            {path: 'disbursement', title: 'Disbursement', ab: 'DB'},
            {path: 'report', title: 'Reports', ab: 'R'},
            {path: 'setup', title: 'Setup', ab: 'S'}
        ]
    },
    {
        path: '/pension',
        title: 'Pension',
        type: 'sub',
        icontype: 'trending_down',
        collapse: 'pension',
        children: [
            { path: 'application', title: 'Application', ab: 'A' },
            { path: 'approval', title: 'Approval', ab: 'AP' },
            { path: 'disbursement', title: 'Disbursement', ab: 'DB' },
            { path: 'report', title: 'Reports', ab: 'R' },
            { path: 'setup', title: 'Setup', ab: 'S' }
        ]
    },
    {
        path: '/insurance',
        title: 'Insurance',
        type: 'sub',
        icontype: 'history',
        collapse: 'insurance',
        children: [
            { path: 'application', title: 'Application', ab: 'A' },
            { path: 'approval', title: 'Approval', ab: 'AP' },
            { path: 'disbursement', title: 'Disbursement', ab: 'DB' },
            { path: 'report', title: 'Reports', ab: 'R' },
            { path: 'setup', title: 'Setup', ab: 'S' }
        ]
    },
    {
        path: '/financial',
        title: 'Financial',
        type: 'sub',
        icontype: 'monetization_on',
        collapse: 'financial',
        children: [
            { path: 'placement', title: 'Placement', ab: 'P' },
            { path: 'nominal', title: 'Nominal', ab: 'N' },
            { path: 'approval', title: 'Approval', ab: 'AP' },
            { path: 'disbursement', title: 'Disbursement', ab: 'DB' },
            { path: 'report', title: 'Reports', ab: 'R' },
            { path: 'setup', title: 'Setup', ab: 'S' }
        ]
    },
    {
        path: '/approval',
        title: 'Approval / Alerts',
        type: 'sub',
        icontype: 'touch_app',
        collapse: 'approval',
        children: [
            { path: 'sms', title: 'Sms', ab: 'S' },
            { path: 'approval', title: 'Approval', ab: 'AP' },
        ]
    },
    {
        path: '/settings',
        title: 'Settings',
        type: 'sub',
        icontype: 'settings',
        collapse: 'settings',
        children: [
            {path: 'usermanager', title: 'User Manager', ab: 'UM'},
            {path: 'commonsequence', title: 'Common Sequence', ab: 'CM'},
            {path: 'generalledger', title: 'General Ledger Code', ab: 'GL'},
            {path: 'branch', title: 'Branch', ab: 'B'},
            {path: 'bank', title: 'Bank', ab: 'B'},
            {path: 'approvalrule', title: 'Approval Rule', ab: 'AR'},
            { path: 'session', title: 'Session', ab: 'S' },
            { path: 'setup', title: 'Setup', ab: 'S' }
        ]
    }
];
@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    public FullName: string;
    public ProfileImageUrl: string;

    constructor(private router: Router, private authService: AuthenticationService) {
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
        this.FullName = this.authService.getFullName();
        this.ProfileImageUrl = `${config.imageUrl}/${this.authService.getImageName()}`;
    }
    updatePS(): void  {
        if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
            const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
            const ps = new PerfectScrollbar(elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    }
    isMac(): boolean {
        let bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    }

    logout() {
        this.authService.logout();
    }
}
