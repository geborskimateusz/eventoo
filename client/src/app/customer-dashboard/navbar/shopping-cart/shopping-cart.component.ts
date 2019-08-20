import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  areEventsBookmarked: Observable<boolean>;

  constructor() { }

  ngOnInit() {
    this.areEventsBookmarked = of(true);
  }

}
