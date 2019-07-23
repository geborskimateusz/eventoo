import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCtaComponent } from './event-cta.component';

describe('EventCtaComponent', () => {
  let component: EventCtaComponent;
  let fixture: ComponentFixture<EventCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
