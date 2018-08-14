import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface DataTable {
  headerRow: string[];
}

declare const $: any;

@Component({
  selector: 'app-joint',
  templateUrl: './joint.component.html',
  styleUrls: ['./joint.component.scss']
})
export class JointComponent implements OnInit, AfterViewInit {

  public dataTable: DataTable;
  rowData: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.dataTable = {
      headerRow: ['Id', 'No', 'Company Name', 'Phone No', 'Registration No', 'Actions'],
    };
  }

  ngAfterViewInit() {
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
            'data': null,
            'defaultContent': '<div class="text-right"><button class="btn bg-info btn-sm btn-round edit">Edit</button></div>',
            'targets': [5]
          }
        ],
        select: true,
        ajax: {
          'url': 'http://localhost:65300/api/corporates',
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
          { data: 'CompanyName' },
          { data: 'PhoneNo' },
          { data: 'RegNumber' },
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
      alert('You press on Row: ' + data['CompanyName'] + '\'s row.');
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
