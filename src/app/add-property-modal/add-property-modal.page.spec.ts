import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPropertyModalPage } from './add-property-modal.page';

describe('AddPropertyModalPage', () => {
  let component: AddPropertyModalPage;
  let fixture: ComponentFixture<AddPropertyModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddPropertyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
