import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { SaveOrUpdateTicket } from '../store/booking.actions';
import { selectAllTickets } from '../store/booking.selectors';
import { map, tap } from 'rxjs/operators';
import { ListTypes } from '../list-type';
import { Observable } from 'rxjs';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {

  @Input() listType: string;
  @Input() tickets: Observable<Ticket[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.initShoppingList();
  }

  isAvilableTicketsList(): boolean {
    return this.listType === ListTypes.AVILABLE_TICKETS;
  }

  onAddToShoppingList(ticket: Ticket): void {
    let initialAmmount: number = 1,
      inStock: number = ticket.inStock - initialAmmount;

      this.updateTicketData(ticket, initialAmmount, inStock)

    // this.store.dispatch(
    //   new SaveOrUpdateTicket({
    //     orderedTicket: {
    //       ...ticket,
    //       ammount: initialAmmount,
    //       inStock
    //     }
    //   }));
  }

  onUpdateOrderAmmount(ticket: Ticket, el: any): void {
    const isIncrementing: boolean =
      el._elementRef.nativeElement.innerText.includes('add'),
      areTicketsAvilable = ticket.inStock > 0;

    let ammount: number,
      inStock: number;


    if (isIncrementing && areTicketsAvilable) {

      if (areTicketsAvilable) {
        ammount = ticket.ammount + 1;
        inStock = ticket.inStock - 1;

        this.updateTicketData(ticket, ammount, inStock)

        // this.store.dispatch(
        //   new SaveOrUpdateTicket({
        //     orderedTicket: { ...ticket, ammount, inStock }
        //   }));
      }

    } else {
      if (ticket.ammount > 1) {

        ammount = ticket.ammount - 1;
        inStock = ticket.inStock + 1;

        this.updateTicketData(ticket, ammount, inStock)
        // this.store.dispatch(
        //   new SaveOrUpdateTicket({
        //     orderedTicket: { ...ticket, ammount, inStock }
        //   }));
      }
    }
  }

  private updateTicketData (ticket: Ticket, ammount: number, inStock: number) {
    this.store.dispatch(
      new SaveOrUpdateTicket({
        orderedTicket: { ...ticket, ammount, inStock }
      }));
  }

  private initShoppingList() {
    if (!this.isAvilableTicketsList()) {
      this.tickets = this.store.pipe(
        select(selectAllTickets));
    }
  }

  // ngOnDestroy(ticket: Ticket) {
  //   const totalNegative = this.ticket.price * this.ammount * -1;
  //   this.priceChange.emit(totalNegative)
  // }
}
