import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-finalize-order-dialog',
  templateUrl: './finalize-order-dialog.component.html',
  styleUrls: ['./finalize-order-dialog.component.scss']
})
export class FinalizeOrderDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FinalizeOrderDialogComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
