import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOrderComponent } from './nav-order.component';

describe('NavOrderComponent', () => {
  let component: NavOrderComponent;
  let fixture: ComponentFixture<NavOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
