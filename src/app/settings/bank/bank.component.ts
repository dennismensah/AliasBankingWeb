import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare interface DataTable {
  headerRow: string[];
}
declare const $: any;

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.scss']
})
export class BankComponent implements OnInit, AfterViewInit {

  public dataTable: DataTable;
  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.dataTable = {
      headerRow: ['Company Name', 'Postal Address', 'LastName', 'OtherNames', 'Enabled', 'Actions'],
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
        select: true,
        ajax: {
          'url': 'http://godfreddavidson-002-site9.ftempurl.com/api/users',
          'type': 'GET',
          'error': function (e) {
            // alert(JSON.stringify(e));
          },
          'dataSrc': function (d) {
            return d
          }
        },
        columns: [
          { data: 'UserId' },
          { data: 'FirstName' },
          { data: 'LastName' },
          { data: 'OtherNames' },
          { data: 'Enabled' }
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
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
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
