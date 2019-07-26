import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Event } from 'src/app/shared/event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  event: Event;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  avilableTickets = [];
  userShoppingList = [];

  constructor(private formBuilder: FormBuilder,
    private router: ActivatedRoute) { }

  ngOnInit() {
    this.event = this.router.snapshot.data['event'];

    this.initAvilableTickets();
  }



  drop(event: CdkDragDrop<string[]>) {

    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  private initAvilableTickets() {
    // this.avilableTickets = this.event.tickets;
  }

  onShoppingListTicketAmmount() {

  }
}
