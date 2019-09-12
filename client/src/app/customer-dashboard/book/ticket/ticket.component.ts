import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { SaveOrUpdateTicket, DeleteTicket } from '../store/booking.actions';
import { ListTypes } from '../list-type';
import { selectPricePerType } from '../store/booking.selectors';
import { OrderedTicket } from 'src/app/shared/model/ordered-ticket.model';

@Component({
    selector: 'app-ticket',
    templateUrl: './ticket.component.html',
    styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

    @Input() ticket: OrderedTicket;
    @Input() listType: string;

    constructor(private store: Store<AppState>) { }

    ngOnInit() {
    }

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

            ammount = this.ticket.amount + 1;
            inStock = this.ticket.inStock - 1;

            this.updateTicketData(ammount, inStock)

        } else {
            if (this.ticket.amount > 1) {

                ammount = this.ticket.amount - 1;
                inStock = this.ticket.inStock + 1;

                this.updateTicketData(ammount, inStock)
            }
        }
    }


    private updateTicketData(ammount: number, inStock: number) {
        this.store.dispatch(
            new SaveOrUpdateTicket({
                orderedTicket: { ...this.ticket, amount: ammount, inStock }
            }));
    }

}
