import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { PaginationService } from './pagination.service';
import { ViewCompileResult } from '@angular/compiler/src/view_compiler/view_compiler';

fdescribe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  let paginationService: PaginationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationComponent],
      providers: [PaginationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    paginationService = TestBed.get(PaginationService);
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should decrement page', () => {

    component.currentPage = 0;

    spyOn(component, 'decrementPage');

    component.decrementPage();

    expect(component.decrementPage).not.toHaveBeenCalledWith(component.changePage);
  })

  it('incrementPage', () => {
    component.currentPage = 1;

    spyOn(component, 'incrementPage');

    component.incrementPage();

    expect(component.incrementPage).toHaveBeenCalled();

  })

  it('showPage', () => {
    let currentPage = 1

    spyOn(component, 'showPage').and.callThrough();

    let newPage = component.showPage(currentPage);

    expect(component.showPage).toHaveBeenCalled();
    expect(newPage).toBe(2);

  });

  it('changePage', () => {

    component.currentPage = 0;

    spyOn(component, 'changePage').and.callThrough();
    spyOn(paginationService, 'pageChange');


    component.changePage();

    expect(component.changePage).toHaveBeenCalled();
    expect(paginationService.pageChange).toHaveBeenCalledWith(component.currentPage)
  })


  it('isPageSingle', () => {
    component.currentPage = 0;

    let firstPage = component.isPageSingle();

    expect(firstPage).toBeTruthy();
  })

  it('isPageArrInitialized return false', () => {
    component.currentPage = 0;

    let isPageArrInitialized = component.isPageArrInitialized();

    expect(isPageArrInitialized).toBeFalsy();
  })

  it('generatePages shoud return 3 pages', () => {
    component.currentPage = 2;

    let pagesArr: number[] = component.generatePages();

    expect(pagesArr.length).toBe(3);
  })

  it('getMiddlePage shoud  return false', () => {
    let backArrowBtnIndex = 0;
    let isMiddle = component.getMiddlePage(backArrowBtnIndex);

    expect(isMiddle).toBeFalsy();
  })
});
