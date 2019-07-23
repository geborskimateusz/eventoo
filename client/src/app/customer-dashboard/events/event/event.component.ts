import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor() { 
    console.log('in event component')
  }

  ngOnInit() {
    console.log('in event component')
  }

}
