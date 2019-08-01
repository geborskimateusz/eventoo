import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { SaveOrUpdateTicket, DeleteTicket } from '../store/booking.actions';
import { selectAllTickets, selectPricePerType } from '../store/booking.selectors';
import { map, tap } from 'rxjs/operators';
import { ListTypes } from '../list-type';
import { Observable, of } from 'rxjs';
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
  }

  onUpdateOrderAmmount(ticket: Ticket, el: any): void {
    const isIncrementing: boolean =
      el._elementRef.nativeElement.innerText.includes('add'),
      areTicketsAvilable = ticket.inStock > 0;

    let ammount: number,
      inStock: number;


    if (isIncrementing && areTicketsAvilable) {

      ammount = ticket.ammount + 1;
      inStock = ticket.inStock - 1;

      this.updateTicketData(ticket, ammount, inStock)

    } else {
      if (ticket.ammount > 1) {

        ammount = ticket.ammount - 1;
        inStock = ticket.inStock + 1;

        this.updateTicketData(ticket, ammount, inStock)
      }
    }
  }

  getPricePerType(ticket: Ticket) {
    return this.store.pipe(
      select(selectPricePerType, {ticketId: ticket.id})
    )
  }
 
  onDeleteTicket(ticket: Ticket) {
    console.log(ticket)
    this.store.dispatch(new DeleteTicket({ticketId: ticket.id}))
  }
  
  private updateTicketData(ticket: Ticket, ammount: number, inStock: number) {
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

}
