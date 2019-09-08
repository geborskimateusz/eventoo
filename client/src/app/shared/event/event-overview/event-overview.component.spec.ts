import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Event } from '../../model/event.model';
import { EventOverviewComponent } from './event-overview.component';
import { MatDialogModule } from '@angular/material';
import { MaterialModule } from 'src/app/material.module';
import { EVENTS_DATASOURCE } from '../../fake-datasource/events-datasource';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { EventLocalizationDialogComponent } from './event-localization-dialog/event-localization-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('EventOverviewComponent', () => {
  let component: EventOverviewComponent;
  let fixture: ComponentFixture<EventOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventOverviewComponent,
        EventLocalizationDialogComponent
      ],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .overrideModule(BrowserDynamicTestingModule,
        { set: { entryComponents: [EventLocalizationDialogComponent] } })
      .compileComponents()

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventOverviewComponent);
    component = fixture.componentInstance;

    let event: Event = EVENTS_DATASOURCE[0];
    component.eventData = (
      ({ id, title, img, date, location }) =>
        ({ eventId: id, title, img, date, location })
    )(event);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openMapDialog', () => {

    spyOn(component.dialog, 'open').and.callThrough();

    component.openMapDialog();

    expect(component.dialog.open).toHaveBeenCalled();
  })


});
