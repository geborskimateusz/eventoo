import { Component, OnInit, Input, Output, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Event } from 'src/app/shared/model/event.model';
import { EventEmitter } from '@angular/core';
import { TicketModel } from 'src/app/shared/model/ticket-model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit, OnDestroy {

  @Input() ticket: TicketModel;
  @Output() priceChange: EventEmitter<number> = new EventEmitter<number>();

  ammount = 0;
  inStock = 0;
  constructor() { }

  ngOnInit() {
    console.log(this.ticket)
    this.inStock = this.ticket.inStock;

    this.incrementInAmmount()

  }

  incrementInAmmount() {
    if (this.inStock > 0) {
      this.ammount++;
      this.inStock--;

      this.priceChange.emit(this.ticket.price)
    }
  }

  decrementInAmmount() {
    if (this.ammount > 1) {
      this.ammount--;
      this.inStock++;

      this.priceChange.emit(-this.ticket.price)

    }
  }

  ngOnDestroy() {
    const total = this.ticket.price * this.ammount;
    this.priceChange.emit(-total)
  }

}
