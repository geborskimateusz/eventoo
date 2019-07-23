import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-tour-dialog',
  templateUrl: './tour-dialog.html',
  styleUrls: ['./tour-dialog.scss']
})
export class TourDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<TourDialog>) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}
