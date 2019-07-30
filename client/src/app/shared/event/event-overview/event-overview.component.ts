import { Component, OnInit, Input } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Location } from '../../model/location.model';
import { MatDialog } from '@angular/material';
import { EventLocalizationDialogComponent } from './event-localization-dialog/event-localization-dialog.component';

export interface EventData {
  eventId: number,
  title: string,
  img: string,
  date: Date,
  location: Location,
}

@Component({
  selector: 'app-event-overview',
  templateUrl: './event-overview.component.html',
  styleUrls: ['./event-overview.component.scss']
})
export class EventOverviewComponent implements OnInit {

  @Input() eventData: EventData;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.eventData)
  }


  openMapDialog() {
    this.dialog.open(EventLocalizationDialogComponent, {
      width: '400px',
      height: '400px',
      data: {
        location: this.eventData.location
      }
    })
  }


}
