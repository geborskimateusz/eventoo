import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { EventService } from 'src/app/shared/event.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit, AfterViewInit {

  @ViewChild('searchInput', {static: false}) input: ElementRef;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    fromEvent<any>(this.input.nativeElement, 'keyup')
            .pipe(
                map(event => event.target.value),
                // debounceTime(400),
                // distinctUntilChanged(),
            ).subscribe(input => this.eventService.searchEvent(input));
  }

}
