import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-stories-expanded-dialog',
  templateUrl: './stories-expanded-dialog.html',
  styleUrls: ['./stories-expanded-dialog.scss']
})
export class StoriesExpandedDialog implements OnInit {

  constructor( public dialogRef: MatDialogRef<StoriesExpandedDialog>) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
