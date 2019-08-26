import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';


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


  constructor() {
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
    console.log(result)
  }

}
