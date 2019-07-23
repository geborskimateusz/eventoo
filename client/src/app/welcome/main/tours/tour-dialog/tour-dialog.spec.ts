import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDialog } from './tour-dialog';

describe('BookModalComponent', () => {
  let component: TourDialog;
  let fixture: ComponentFixture<TourDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDialog ]
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
});
