import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-finalize-order-dialog',
  templateUrl: './finalize-order-dialog.component.html',
  styleUrls: ['./finalize-order-dialog.component.scss']
})
export class FinalizeOrderDialogComponent implements OnInit {

  @Output() confirmationOrder: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public dialogRef: MatDialogRef<FinalizeOrderDialogComponent>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  orderFinalized() {
    return true;
  }
}
