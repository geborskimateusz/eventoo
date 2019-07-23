import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCart } from './shopping-cart-component';

describe('FavouriteComponent', () => {
  let component: ShoppingCart;
  let fixture: ComponentFixture<ShoppingCart>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCart ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
