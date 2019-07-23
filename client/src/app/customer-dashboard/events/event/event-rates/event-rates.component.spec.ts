import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventRatesComponent } from './event-rates.component';

describe('EventRatesComponent', () => {
  let component: EventRatesComponent;
  let fixture: ComponentFixture<EventRatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventRatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
