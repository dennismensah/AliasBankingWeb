import { ErrorHandler } from '@angular/core';
import { Alerts } from '../components/alerts';

export class AppErrorHandler implements ErrorHandler {

    handleError(error: any): void {
        switch (error.status) {
            case 400:
                Alerts.showErrorSweetAlert('Error', 'The request was invalid.')
                break;
            case 401:
                Alerts.showErrorSweetAlert('Error', 'You are not authorized to access this resource.')
                break;
            case 500:
                Alerts.showErrorSweetAlert('Error', 'There was an error processing the request.')
                break;
            default:
                break;
        }
    }
}
