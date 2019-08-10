import { Component, OnInit, OnDestroy } from '@angular/core';
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
    this.paginationService.poinerReset$.subscribe(
      firstPage => {
        this.currentPage = firstPage;
      }
    )
   }

  ngOnInit() {
  }

  decrementPage() {
    if (this.currentPage !== 1) {
      this.currentPage--;
    }
  }

  incrementPage() {
    this.currentPage++;
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
