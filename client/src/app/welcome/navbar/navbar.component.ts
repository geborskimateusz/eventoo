import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document) { }

  ngOnInit() {
  }

  //shortest workourond for close by click on anchor tag
  onClose() {
    this.document.getElementById("navi-toggle").checked = false;
  }

}
