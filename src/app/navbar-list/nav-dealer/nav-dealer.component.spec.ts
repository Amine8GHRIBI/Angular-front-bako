import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavDealerComponent } from './nav-dealer.component';

describe('NavDealerComponent', () => {
  let component: NavDealerComponent;
  let fixture: ComponentFixture<NavDealerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavDealerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
