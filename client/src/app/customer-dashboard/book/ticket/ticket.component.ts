import { Component, OnInit, Input, Output, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Event } from 'src/app/shared/model/event.model';
import { EventEmitter } from '@angular/core';
import { Ticket } from 'src/app/shared/model/ticket-model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { BookingActionTypes, AddAllTickets, SaveOrUpdateTicket, DeleteTicket } from '../store/booking.actions';
import { ListTypes } from '../list-type';
import { selectPricePerType } from '../store/booking.selectors';
// import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent  {

    @Input() ticket: Ticket;
    @Input() listType: string;

    constructor(private store: Store<AppState>) {}
 
    isAvilableTicketsList(): boolean {
        return this.listType === ListTypes.AVILABLE_TICKETS;
      }
    
      onAddToShoppingList(): void {
        let initialAmmount: number = 1,
          inStock: number = this.ticket.inStock - initialAmmount;
    
        this.updateTicketData(initialAmmount, inStock)
      }
    
      getPricePerType() {
        return this.store.pipe(
          select(selectPricePerType, { ticketId: this.ticket.id })
        )
      }
    
      onDeleteTicket() {
        this.store.dispatch(new DeleteTicket({ ticketId: this.ticket.id }))
      }
    
      onUpdateOrderAmmount(el: any): void {
        const isIncrementing: boolean =
          el._elementRef.nativeElement.innerText.includes('add'),
          areTicketsAvilable = this.ticket.inStock > 0;
    
        let ammount: number,
          inStock: number;
    
    
        if (isIncrementing && areTicketsAvilable) {
    
          ammount = this.ticket.ammount + 1;
          inStock = this.ticket.inStock - 1;
    
          this.updateTicketData(ammount, inStock)
    
        } else {
          if (this.ticket.ammount > 1) {
    
            ammount = this.ticket.ammount - 1;
            inStock = this.ticket.inStock + 1;
    
            this.updateTicketData(ammount, inStock)
          }
        }
      }
    
    
      private updateTicketData(ammount: number, inStock: number) {
        this.store.dispatch(
          new SaveOrUpdateTicket({
            orderedTicket: { ...this.ticket, ammount, inStock }
          }));
      }

}
