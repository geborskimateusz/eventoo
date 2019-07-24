import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/shared/event.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  event: Event;

  constructor(private router: ActivatedRoute) { 
    console.log('in event component')
  }

  ngOnInit() {
    this.event = this.router.snapshot.data['event'];
    console.log(this.event);
  }

}
