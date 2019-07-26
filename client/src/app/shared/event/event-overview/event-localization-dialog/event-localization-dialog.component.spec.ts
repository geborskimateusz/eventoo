import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLocalizationDialogComponent } from './event-localization-dialog.component';

describe('EventLocalizationDialogComponent', () => {
  let component: EventLocalizationDialogComponent;
  let fixture: ComponentFixture<EventLocalizationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLocalizationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLocalizationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
