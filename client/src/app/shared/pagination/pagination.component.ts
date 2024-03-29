import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  currentPage = 0;
  nextPageContainsEvents: boolean;

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {

    this.paginationService.nextPageEvents$.subscribe(
      flag => this.nextPageContainsEvents = flag
    )

    this.paginationService.page$.pipe(
      delay(0)
    ).subscribe(
      firstPage => {
        this.currentPage = firstPage;
      }
    )

    this.changePage();
  }

  decrementPage() {
    if (this.currentPage !== 0) {
      this.currentPage--;
      this.changePage();
    }
  }

  incrementPage() {
    this.currentPage++;
    this.changePage();
  }

  showPage(page: number) {
    return page + 1;
  }

  changePage() {
    this.paginationService.pageChange(this.currentPage);
  }

  isPageSingle(): boolean {
    return this.currentPage == 0;
  }

  isPageArrInitialized(): boolean {
    return this.currentPage == 1;
  }

  generatePages(): number[] {
    if (this.isPageArrInitialized()) {
      return [0, 1];
    } else {
      let arr: number[] = [];
      for (let i = this.currentPage - 1; i <= this.currentPage + 1; i++) {
        arr.push(i);
      }
      return arr;
    }
  }

  getMiddlePage(index: number): boolean {
    return index == 1;
  }



}
