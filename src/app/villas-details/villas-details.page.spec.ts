import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VillasDetailsPage } from './villas-details.page';

describe('VillasDetailsPage', () => {
  let component: VillasDetailsPage;
  let fixture: ComponentFixture<VillasDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VillasDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
