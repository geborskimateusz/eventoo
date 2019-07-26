import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  // @Input()

  constructor() { }

  ngOnInit() {


    // for (const [type, ticketData] of Object.entries(tickets)) {
    //   this.avilableTickets.push({ name: type, ticket: ticketData });
    // }

    // console.log(this.avilableTickets)
  }

}
