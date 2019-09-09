import { async, ComponentFixture, TestBed, flushMicrotasks } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { Store } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;
  let storeSpy: any;

  beforeEach(async(() => {

    storeSpy = jasmine.createSpyObj('Store', ["dispatch"]);

    TestBed.configureTestingModule({
      declarations: [BookComponent],
      providers: [
        { provide: Store, useValue: storeSpy }
      ],
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.contactForm.valid).toBeFalsy();
  });

  it('form invalid on email without @', () => {
    let errors = {};
    let email = component.contactForm.controls['email'];
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['pattern']).toBeTruthy();
  })

  it('onSubmit', () => {

    storeSpy.dispatch.and.callThrough();

    spyOn(component, 'onSubmit');

    expect(component.contactForm.valid).toBeFalsy();

    let formControls = component.contactForm.controls;

    let fullName = formControls['fullName'].setValue('John Doe');
    let email = formControls['email'].setValue('fakeEmail@gmail.com');

    component.onSubmit();

    expect(component.onSubmit).toHaveBeenCalled();

  })

});
