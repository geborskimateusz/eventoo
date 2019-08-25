import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-under-development',
  templateUrl: './under-development.component.html',
  styleUrls: ['./under-development.component.scss']
})
export class UnderDevelopmentComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  onPreviousPage() {
    this.location.back();
  }
}
