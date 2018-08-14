import swal from 'sweetalert2';
declare var $: any;

export class Alerts {

    static showSuccessSweetAlert(title, text) {
            swal({
                title: title,
                text: text,
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success',
                type: 'success'
            }).catch(swal.noop)
        }

    static showErrorSweetAlert(title, text) {
        swal({
            title: title,
            text: text,
            buttonsStyling: false,
            confirmButtonClass: 'btn btn-danger',
            type: 'error'
        }).catch(swal.noop)
    }

}
