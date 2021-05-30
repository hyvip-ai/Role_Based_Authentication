import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyernotificationComponent } from './buyernotification.component';

describe('BuyernotificationComponent', () => {
  let component: BuyernotificationComponent;
  let fixture: ComponentFixture<BuyernotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyernotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyernotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
