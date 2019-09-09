import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCtaComponent } from './event-cta.component';
import { EVENTS_DATASOURCE } from 'src/app/shared/fake-datasource/events-datasource';
import { RouterTestingModule } from '@angular/router/testing';

describe('EventCtaComponent', () => {
  let component: EventCtaComponent;
  let fixture: ComponentFixture<EventCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventCtaComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventCtaComponent);
    component = fixture.componentInstance;
    component.eventId = EVENTS_DATASOURCE[0].id;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
