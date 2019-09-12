import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-event-cta',
  templateUrl: './event-cta.component.html',
  styleUrls: ['./event-cta.component.scss']
})
export class EventCtaComponent implements OnInit {

  @Input() eventId: number;

  constructor() { }

  ngOnInit() {
  }

}
