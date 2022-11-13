import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSpaceComponent } from './news-space.component';

describe('NewsSpaceComponent', () => {
  let component: NewsSpaceComponent;
  let fixture: ComponentFixture<NewsSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
