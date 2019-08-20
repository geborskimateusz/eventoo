import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppState } from 'src/app/store';
import { Store, select } from '@ngrx/store';
import { isShoppingCartEmpty } from './store/shopping-cart.selectors';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  isShoppingCartEmpty: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.isShoppingCartEmpty = this.store.pipe(
      select(isShoppingCartEmpty),
      tap(flag => console.log(flag))
    )
  }

}
