import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { isShoppingCartEmpty, selectTotalCount } from './store/shopping-cart.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  isShoppingCartEmpty$: Observable<boolean>;
  count$: Observable<number>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isShoppingCartEmpty$ = this.store.pipe(
      select(isShoppingCartEmpty)
    );

    this.count$ = this.store.pipe(
      select(selectTotalCount),
    )
  }

}
