import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminListingPage } from './admin-listing.page';

describe('AdminListingPage', () => {
  let component: AdminListingPage;
  let fixture: ComponentFixture<AdminListingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdminListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
