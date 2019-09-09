import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReviewsComponent } from './user-reviews.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('UserReviewsComponent', () => {
  let component: UserReviewsComponent;
  let fixture: ComponentFixture<UserReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReviewsComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
