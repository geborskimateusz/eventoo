import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { StoriesExpandedDialog as StoriesExpandedDialog } from './stories-expanded/stories-expanded-dialog';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(StoriesExpandedDialog, {
      minWidth: '50rem',
      panelClass: 'under-dev-dialog'
    })
  }

}
