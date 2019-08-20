import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { isShoppingCartEmpty, selectTotalCount, selectEventsFromShoppingList } from './store/shopping-cart.selectors';
import { tap, map } from 'rxjs/operators';
import { Event } from "/home/mat/Projects/eventoo-app/client/src/app/shared/model/event.model";
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
      tap(flad => console.log(flad))
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

    if (length <= 5) {
      return events;
    } else {
      return events.slice(length - 5, length);
    }
  }

}
