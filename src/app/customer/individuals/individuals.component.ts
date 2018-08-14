import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router} from '@angular/router';

declare interface DataTable {
  headerRow: string[];
}

declare const $: any;


@Component({
  selector: 'app-individuals',
  templateUrl: './individuals.component.html',
  styleUrls: ['./individuals.component.scss']
})
export class IndividualsComponent implements OnInit, AfterViewInit {

  public dataTable: DataTable;
  rowData: any;

  constructor(private router: Router) {  }

  ngOnInit() {
    this.dataTable = {
      headerRow: ['Id', 'No', 'Full Name', 'Phone No', 'Gender', 'Actions'],
    };
  }

  ngAfterViewInit() {
    const self =  this;
    $('#datatables').DataTable(
      {
        'pagingType': 'full_numbers',
        'lengthMenu': [
          [10, 25, 50, -1],
          [10, 25, 50, 'All']
        ],
        'columnDefs': [
          {
            'targets': [0],
            'visible': false
          },
          {
            'targets': [1],
            'width': '15%'
          },
          {
            'targets': [2],
            'width': '35%'
          },
          {
            'targets': [3],
            'width': '15%'
          },
          {
            'targets': [4],
            'width': '15%'
          },
          {
            'data': null,
            'defaultContent': '<div class="text-right"><button class="btn bg-info btn-sm btn-round edit">Edit</button></div>',
            // 'defaultContent': '<a href="/" class="btn bg-info btn-sm btn-round edit">Edit</a>',
            'targets': [5],
            'width': '20%'
          }
        ],
        select: true,
        ajax: {
          'url': 'http://godfreddavidson-002-site9.ftempurl.com/api/individuals/summary',
          'type': 'GET',
          'error': function (e) {
          },
          'dataSrc': function (d) {
            return d
          }
        },
        columns: [
          { data: 'Id' },
          { data: 'No' },
          { data: 'FullName' },
          { data: 'PhoneNo' },
          { data: 'Gender' },
        ],
        responsive: true,
        language: {
          search: '_INPUT_',
          searchPlaceholder: 'Search customers',
        }
      });

    const table = $('#datatables').DataTable();

    // Edit record
    table.on('click', '.edit', function (e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      self.router.navigate([`/customer/individual/edit/${data['Id']}`]);
      // alert('You press on Row: ' + data['FullName']  + '\'s row.');
      e.preventDefault();
    });

    // Delete a record
    table.on('click', '.remove', function (e) {
      const $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    // Like record
    table.on('click', '.like', function (e) {
      alert('You clicked on Like button');
      e.preventDefault();
    });

    $('.card .material-datatables label').addClass('form-group');
  }

}
