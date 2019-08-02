import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizeOrderDialogComponent } from './finalize-order-dialog.component';

describe('FinalizeOrderDialogComponent', () => {
  let component: FinalizeOrderDialogComponent;
  let fixture: ComponentFixture<FinalizeOrderDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizeOrderDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizeOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
