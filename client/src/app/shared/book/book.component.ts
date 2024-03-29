import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { ContactRequest } from '../util/util-store/util.actions';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

  contactForm: FormGroup;

  fullNameRegExp = "^([a-zA-Z'-.]+ [a-zA-Z'-.]+)$";
  emailRegExp = "[^ @]*@[^ @]*";

  requestTypes = ['Services', 'Other']


  constructor(private store: Store<AppState>) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.pattern(this.fullNameRegExp)]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailRegExp)]),
      serviceType: new FormControl('', [
        Validators.required])
    })
  }

  onSubmit() {
    const result = this.contactForm.value;
    this.store.dispatch(new ContactRequest({
      email: result.email,
      fullName: result.fullName
    }))
  }

}
