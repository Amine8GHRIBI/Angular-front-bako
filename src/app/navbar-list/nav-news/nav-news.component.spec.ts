import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavNewsComponent } from './nav-news.component';

describe('NavNewsComponent', () => {
  let component: NavNewsComponent;
  let fixture: ComponentFixture<NavNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
