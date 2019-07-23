import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesExpandedDialog } from './stories-expanded-dialog';

describe('StoriesExpandedComponent', () => {
  let component: StoriesExpandedDialog;
  let fixture: ComponentFixture<StoriesExpandedDialog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesExpandedDialog ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesExpandedDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // expect(component).toBeTruthy();
  });
});
