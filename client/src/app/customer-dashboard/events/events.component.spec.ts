import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsComponent } from './events.component';
import { MaterialModule } from 'src/app/material.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PaginationService } from 'src/app/shared/pagination/pagination.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { splitTypescriptSuffix } from '@angular/compiler/src/aot/util';

xdescribe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;
  let paginationService: PaginationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventsComponent],
      providers: [PaginationService],
      imports: [
        MaterialModule,
        BrowserAnimationsModule
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    paginationService = TestBed.get(PaginationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initMatTabs', () => {

    spyOn(component, 'initMatTabs');

    component.ngOnInit();

    expect(component.initMatTabs).toHaveBeenCalled();
  })

});
