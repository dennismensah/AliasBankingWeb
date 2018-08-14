import { UserService } from './../../../services/user.service';
import { Router } from '@angular/router';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { AuthenticationService } from './../../../services/authentication.service';
import { Alerts } from '../../../components/alerts';
import { CountryService } from '../../../services/country.service';
import { TargetService } from '../../../services/target.service';
import { SectorService } from '../../../services/sector.service';
import { IndividualService } from '../../../services/individual.service';
import { Rating } from '../../../models/rating';
import { RatingService } from '../../../services/rating.service';
// IMPORTANT: this is a plugin which requires jQuery for initialisation and data manipulation

import { Component, OnInit, OnChanges, AfterViewInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, FormGroup } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder } from '@angular/forms';

declare const $: any;
interface FileReaderEventTarget extends EventTarget {
  result: string;
}

interface FileReaderEvent extends Event {
  target: FileReaderEventTarget;
  getMessage(): string;
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-iadd',
  templateUrl: './iadd.component.html',
  styleUrls: ['./iadd.component.scss']
})
export class IAddComponent implements OnInit, OnChanges, AfterViewInit {
  ratings: Rating[] = []
  sectors = []
  targets = []
  users = []

  bcolor = 'accent';
  bchecked = false;
  scolor = 'accent';
  schecked = false;

  titles = [
    { value: 'Mr', text: 'Mr.' },
    { value: 'Mrs', text: 'Mrs.' }
  ]

  genders = [
    { value: 'Male', text: 'Male' },
    { value: 'Female', text: 'Female' }
  ]

  status = [
    { value: 0, text: 'Inactive' },
    { value: 1, text: 'Active' }
  ]

  maritalStatus = [
    { value: 'Single', text: 'Single' },
    { value: 'Married', text: 'Married' },
    { value: 'Seperated', text: 'Seperated' },
    { value: 'Widow', text: 'Widow' },
    { value: 'Widower', text: 'Widower' },
  ]

  homeType = [
    { value: 'Owned', text: 'Owned' },
    { value: 'Rented', text: 'Rented' },
    { value: 'Mortgauge', text: 'Mortgauge' },
    { value: 'Family', text: 'Family' },
  ]

  countries = []

  securityGroups = [
    { value: 'Secured', text: 'Secured' }
  ]
  /*emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);*/

  matcher = new MyErrorStateMatcher();

  type: FormGroup;

  constructor(private formBuilder: FormBuilder, private ratingService: RatingService,
    private sectorService: SectorService, private targetService: TargetService,
    private individualService: IndividualService, private countryService: CountryService,
    private authService: AuthenticationService, private spinnerService: Ng4LoadingSpinnerService,
    private router: Router, private userService: UserService) { }

  isFieldValid(form: FormGroup, field: string) {
    return !form.get(field).valid && form.get(field).touched;
  }

  displayFieldCss(form: FormGroup, field: string) {
    return {
      'has-error': this.isFieldValid(form, field),
      'has-feedback': this.isFieldValid(form, field)
    };
  }
  ngOnInit() {
    this.type = this.formBuilder.group({
      CreatedUserId: [this.authService.getUserId()],
      CreatedDate: [new Date()],
      Title: ['', Validators.required],
      Occupation: ['', Validators.required],
      Gender: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      OtherName: ['', Validators.required],
      Telephone: ['', Validators.required],
      Mobile: ['', Validators.required],
      Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      PostalAddress: ['', Validators.required],
      PostCode: [null, Validators.required],
      HouseNumber: ['', Validators.required],
      Address: ['', Validators.required],
      CountryId: [null, Validators.required],
      MaritalStatus: ['', Validators.required],
      HomeType: ['', Validators.required],
      NumberOfChildren: [null, Validators.required],
      City: ['', Validators.required],
      DateOfBirth: ['', Validators.required],
      FirstAccOfficerId: [null],
      // Mother and Next of Kin
      MotherMaidenName: ['', Validators.required],
      MotherFirstName: ['', Validators.required],
      MotherDateOfBirth: ['', Validators.required],
      SpouseName: ['', Validators.required],
      SpouseOtherName: ['', Validators.required],
      SpouseDateOfBirth: ['', Validators.required],
      KName: ['', Validators.required],
      KPhone: ['', Validators.required],
      OtherContact: ['', Validators.required],
      KRelation: ['', Validators.required],
      KEmail: ['', Validators.required],
      KAddress: ['', Validators.required],
      Note: ['', Validators.required],
      SecurityGroup: ['', Validators.required],
      // Identification
      IdVerified: ['', Validators.required],
      IdNumber: ['', Validators.required],
      BiometricIdNumber: ['', Validators.required],
      IdDateIssued: ['', Validators.required],
      IdDateExpire: ['', Validators.required],
      SSNumber: ['', Validators.required],
      TinNumber: ['', Validators.required],
      RatingId: [null, Validators.required],
      SectorId: [null, Validators.required],
      TargetId: [null, Validators.required],
      Status: [null, Validators.required],
      Picture: ['', Validators.required],
      Signature: ['', Validators.required],
      BroadcastAlert: ['', Validators.required],
      SupportAlert: ['', Validators.required],
    });
    // Code for the Validator
    const $validator = $('.card-wizard form').validate({
      rules: {/*
        gender: {
          required: true
        },
        telephone: {
          required: true
        },
        title: {
          required: true
        },
        FirstName: {
          required: true,
          minlength: 3
        },
        lastname: {
          required: true,
          minlength: 3
        },
        email: {
          required: true,
          minlength: 3,
        }*/
      },

      highlight: function (element) {
        $(element).closest('.form-group').removeClass('has-success').addClass('has-danger');
      },
      success: function (element) {
        $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
      },
      errorPlacement: function (error, element) {
        $(element).append(error);
      }
    });

    // Wizard Initialization
    $('.card-wizard').bootstrapWizard({
      'tabClass': 'nav nav-pills',
      'nextSelector': '.btn-next',
      'previousSelector': '.btn-previous',

      onNext: function (tab, navigation, index) {
        var $valid = $('.card-wizard form').valid();
        if (!$valid) {
          $validator.focusInvalid();
          return false;
        }
      },

      onInit: function (tab: any, navigation: any, index: any) {

        // check number of tabs and fill the entire row
        let $total = navigation.find('li').length;
        let $wizard = navigation.closest('.card-wizard');

        let $first_li = navigation.find('li:first-child a').html();
        let $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
        $('.card-wizard .wizard-navigation').append($moving_div);

        $total = $wizard.find('.nav li').length;
        let $li_width = 100 / $total;

        let total_steps = $wizard.find('.nav li').length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        let mobile_device = $(document).width() < 600 && $total > 3;

        if (mobile_device) {
          move_distance = $wizard.width() / 2;
          index_temp = index % 2;
          $li_width = 50;
        }

        $wizard.find('.nav li').css('width', $li_width + '%');

        let step_width = move_distance;
        move_distance = move_distance * index_temp;

        let $current = index + 1;

        if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
          move_distance -= 8;
        } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
          move_distance += 8;
        }

        if (mobile_device) {
          let x: any = index / 2;
          vertical_level = parseInt(x);
          vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
        $('.moving-tab').css('transition', 'transform 0s');
      },

      onTabClick: function (tab: any, navigation: any, index: any) {

        const $valid = $('.card-wizard form').valid();

        if (!$valid) {
          return false;
        } else {
          return true;
        }
      },

      onTabShow: function (tab: any, navigation: any, index: any) {
        let $total = navigation.find('li').length;
        let $current = index + 1;

        const $wizard = navigation.closest('.card-wizard');

        // If it's the last tab then hide the last button and show the finish instead
        if ($current >= $total) {
          $($wizard).find('.btn-next').hide();
          $($wizard).find('.btn-finish').show();
        } else {
          $($wizard).find('.btn-next').show();
          $($wizard).find('.btn-finish').hide();
        }

        const button_text = navigation.find('li:nth-child(' + $current + ') a').html();

        setTimeout(function () {
          $('.moving-tab').text(button_text);
        }, 150);

        const checkbox = $('.footer-checkbox');

        if (index !== 0) {
          $(checkbox).css({
            'opacity': '0',
            'visibility': 'hidden',
            'position': 'absolute'
          });
        } else {
          $(checkbox).css({
            'opacity': '1',
            'visibility': 'visible'
          });
        }
        $total = $wizard.find('.nav li').length;
        let $li_width = 100 / $total;

        let total_steps = $wizard.find('.nav li').length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        let mobile_device = $(document).width() < 600 && $total > 3;

        if (mobile_device) {
          move_distance = $wizard.width() / 2;
          index_temp = index % 2;
          $li_width = 50;
        }

        $wizard.find('.nav li').css('width', $li_width + '%');

        let step_width = move_distance;
        move_distance = move_distance * index_temp;

        $current = index + 1;

        if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
          move_distance -= 8;
        } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
          move_distance += 8;
        }

        if (mobile_device) {
          let x: any = index / 2;
          vertical_level = parseInt(x);
          vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

        });
      }
    });

    // Prepare the preview for profile picture
    $('#wizard-picture').change(function () {
      const input = $(this);

      if (input[0].files && input[0].files[0]) {
        const reader = new FileReader();

        reader.onload = function (e: FileReaderEvent) {
          $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
        };
        reader.readAsDataURL(input[0].files[0]);
      }
    });

    $('#wizard-picture1').change(function () {
      const input = $(this);

      if (input[0].files && input[0].files[0]) {
        const reader = new FileReader();

        reader.onload = function (e: FileReaderEvent) {
          $('#wizardPicturePreview1').attr('src', e.target.result).fadeIn('slow');
        };
        reader.readAsDataURL(input[0].files[0]);
      }
    });

    $('[data-toggle="wizard-radio"]').click(function () {
      const wizard = $(this).closest('.card-wizard');
      wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
      $(this).addClass('active');
      $(wizard).find('[type="radio"]').removeAttr('checked');
      $(this).find('[type="radio"]').attr('checked', 'true');
    });

    $('[data-toggle="wizard-checkbox"]').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).find('[type="checkbox"]').removeAttr('checked');
      } else {
        $(this).addClass('active');
        $(this).find('[type="checkbox"]').attr('checked', 'true');
      }
    });

    $('.set-full-height').css('height', 'auto');
    this.ratingService.getRating().subscribe(
      res => { this.ratings = res },
      // error => { alert(error) }
    );
    this.sectorService.getSector().subscribe(
      res => { this.sectors = res },
      // error => { alert(error) }
    );
    this.targetService.getTarget().subscribe(
      res => { this.targets = res },
      // error => { alert(error) }
    );
    this.countryService.getCountry().subscribe(
      res => { this.countries = res },
      // error => { alert(error) }
    );
    this.userService.getUsers().subscribe(
      res => { this.users = res  }
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    const input = $(this);

    if (input[0].files && input[0].files[0]) {
      const reader: any = new FileReader();

      reader.onload = function (e: FileReaderEvent) {
        $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
      };
      reader.readAsDataURL(input[0].files[0]);
    }
  }

 ngAfterViewInit() {
    $(window).resize(() => {
      $('.card-wizard').each(function () {

        const $wizard = $(this);
        const index = $wizard.bootstrapWizard('currentIndex');
        let $total = $wizard.find('.nav li').length;
         let $li_width = 100 / $total;

        let total_steps = $wizard.find('.nav li').length;
        let move_distance = $wizard.width() / total_steps;
        let index_temp = index;
        let vertical_level = 0;

        let mobile_device = $(document).width() < 600 && $total > 3;

        if (mobile_device) {
          move_distance = $wizard.width() / 2;
          index_temp = index % 2;
          $li_width = 50;
        }

        $wizard.find('.nav li').css('width', $li_width + '%');

        let step_width = move_distance;
        move_distance = move_distance * index_temp;

        let $current = index + 1;

        if ($current == 1 || (mobile_device == true && (index % 2 == 0))) {
          move_distance -= 8;
        } else if ($current == total_steps || (mobile_device == true && (index % 2 == 1))) {
          move_distance += 8;
        }

        if (mobile_device) {
          let x: any = index / 2;
          vertical_level = parseInt(x);
          vertical_level = vertical_level * 38;
        }

        $wizard.find('.moving-tab').css('width', step_width);
        $('.moving-tab').css({
          'transform': 'translate3d(' + move_distance + 'px, ' + vertical_level + 'px, 0)',
          'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'
        });

        $('.moving-tab').css({
          'transition': 'transform 0s'
        });
      });
    });
  }

  get f() {
    return this.type.controls;
  }

  onSubmit() {
    this.spinnerService.show();
    this.individualService.addIndividual(JSON.stringify(this.type.value)).subscribe(
      res => {
        this.spinnerService.hide();
        Alerts.showSuccessSweetAlert(res['Message'], res['Output']);
        this.router.navigate(['/customer/individual']);
      },
      error => {
        this.spinnerService.hide();
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
    );
  }

}
