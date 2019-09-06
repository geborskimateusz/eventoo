import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesExpandedDialog } from './stories-expanded-dialog';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogRef } from '@angular/material';

describe('StoriesExpandedComponent', () => {
  let component: StoriesExpandedDialog;
  let fixture: ComponentFixture<StoriesExpandedDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ StoriesExpandedDialog ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesExpandedDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onNoClick', () => {
    spyOn(component, 'onNoClick');

    component.onNoClick();

    expect(component.onNoClick).toHaveBeenCalled();
  })
});
