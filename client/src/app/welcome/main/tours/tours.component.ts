import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TourDialog } from './tour-dialog/tour-dialog';

@Component({
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.scss']
})
export class ToursComponent implements OnInit {

  constructor(public bookDialog: MatDialog) { }

  ngOnInit() {
  }

  openBookDialog() {
    this.bookDialog.open(TourDialog)
  }
}
