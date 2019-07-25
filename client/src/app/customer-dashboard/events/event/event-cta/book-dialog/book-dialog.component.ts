import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EventData } from '../event-cta.component';

@Component({
  selector: 'app-book-dialog',
  templateUrl: './book-dialog.component.html',
  styleUrls: ['./book-dialog.component.css']
})
export class BookDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: EventData) { }

  ngOnInit() {
    console.log(this.data)
  }

}
