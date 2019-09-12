import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Event } from 'src/app/shared/model/event.model';
import { AppState } from 'src/app/store';
import { selectEventsFromShoppingList } from '../../navbar/shopping-cart/store/shopping-cart.selectors';

@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class ShoppingCartListComponent implements OnInit {
  dataSource;
  columnsToDisplay = ['title', 'location', 'date'];
  expandedElement: Event | null;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(
      select(selectEventsFromShoppingList),
      tap(events => this.dataSource = events),
    ).subscribe();
  }

}

