import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseReservationPage } from './house-reservation.page';

describe('HouseReservationPage', () => {
  let component: HouseReservationPage;
  let fixture: ComponentFixture<HouseReservationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HouseReservationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
