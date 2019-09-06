import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursComponent } from './tours.component';
import { MaterialModule } from 'src/app/material.module';

describe('ToursComponent', () => {
  let component: ToursComponent;
  let fixture: ComponentFixture<ToursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule
      ],
      declarations: [ ToursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openBookDialog', () => {
    spyOn(component, 'openBookDialog');

    component.openBookDialog();

    expect(component.openBookDialog).toHaveBeenCalled();
  })
});
