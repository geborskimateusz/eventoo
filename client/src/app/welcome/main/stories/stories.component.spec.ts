import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoriesComponent } from './stories.component';
import { MaterialModule } from 'src/app/material.module';

describe('StoriesComponent', () => {
  let component: StoriesComponent;
  let fixture: ComponentFixture<StoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoriesComponent ],
      imports: [MaterialModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('openDialog', () => {
    spyOn(component, 'openDialog');

    component.openDialog();

    expect(component.dialog).toHaveBeenCalled();
  })
});
