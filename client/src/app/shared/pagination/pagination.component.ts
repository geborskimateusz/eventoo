import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  // itemsPerPage = 15;

  currentPage = 1;

  constructor(private paginationService: PaginationService) {
    this.paginationService.page$.subscribe(
      firstPage => {
        this.currentPage = firstPage;
      }
    )
   }

  ngOnInit() {
    this.changePage();
  }

  decrementPage() {
    if (this.currentPage !== 1) {
      this.currentPage--;
      this.changePage();
    }
  }

  incrementPage() {
    this.currentPage++;
    this.changePage();
  }

  private changePage() {
    //pagination starts from 0, here default page is 0
    let page = this.currentPage;
    console.log(page)
    this.paginationService.pageChange(page);
  }

  isPageSingle(): boolean {
    return this.currentPage == 1;
  }

  isPageDouble(): boolean {
    return this.currentPage == 2;
  }

  generatePages(): number[] {
    if (this.isPageDouble()) {
      return [1, 2];
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
