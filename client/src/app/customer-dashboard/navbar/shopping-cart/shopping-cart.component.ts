import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { isShoppingCartEmpty, selectTotalCount, selectEventsFromShoppingList, selectEventsIDs } from './store/shopping-cart.selectors';
import { tap, map } from 'rxjs/operators';
import { Event } from "/home/mat/Projects/eventoo-app/client/src/app/shared/model/event.model";
import { PutShoppingCart } from './store/shopping-cart.actions';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  isShoppingCartEmpty$: Observable<boolean>;
  count$: Observable<number>;
  shoppingCartFragment$: Observable<Event[]>


  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isShoppingCartEmpty$ = this.store.pipe(
      select(isShoppingCartEmpty),
    );

    this.count$ = this.store.pipe(
      select(selectTotalCount),
    )

    this.shoppingCartFragment$ = this.store.pipe(
      select(selectEventsFromShoppingList),
      map(events => this.paginateEvents(events))
    )
  }

  private paginateEvents(events: Event[]): Event[] {

    let length = events.length;

    const elementsPerPage = 5;
    if (length <= elementsPerPage) {
      return events;
    } else {
      return events.slice(length - elementsPerPage, length);
    }
  }

}
