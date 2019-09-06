import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDialog } from './tour-dialog';
import { MaterialModule } from 'src/app/material.module';
import { MatDialogRef } from '@angular/material';

describe('BookModalComponent', () => {
  let component: TourDialog;
  let fixture: ComponentFixture<TourDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [ TourDialog ],
      providers: [
        {provide: MatDialogRef, useValue: {}},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onClose', () => {
    spyOn(component, 'onClose');

    component.onClose();

    expect(component.onClose).toHaveBeenCalled();
  })
});
