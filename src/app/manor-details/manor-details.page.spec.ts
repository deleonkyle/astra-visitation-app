import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManorDetailsPage } from './manor-details.page';

describe('ManorDetailsPage', () => {
  let component: ManorDetailsPage;
  let fixture: ComponentFixture<ManorDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ManorDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
