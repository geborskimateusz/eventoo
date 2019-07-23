import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-auth-dialog',
  templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<AuthDialog>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onClose(isAuthSeccesfull: boolean){
    if(isAuthSeccesfull) {
      this.dialogRef.close();
    }
  }

}
