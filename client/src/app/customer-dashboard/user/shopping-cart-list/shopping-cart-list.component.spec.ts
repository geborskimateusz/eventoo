import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartListComponent } from './shopping-cart-list.component';
import { MaterialModule } from 'src/app/material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';

xdescribe('ShoppingCartListComponent', () => {
  let component: ShoppingCartListComponent;
  let fixture: ComponentFixture<ShoppingCartListComponent>;
  let storeSpy: any;

  beforeEach(async(() => {
    storeSpy = jasmine.createSpyObj('Store', ["select", "pipe"]);

    TestBed.configureTestingModule({
      declarations: [ShoppingCartListComponent],
      imports: [ 
        MaterialModule,
        RouterTestingModule
      ],
      providers: [
        { provide: Store, useValue: storeSpy }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
