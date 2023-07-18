import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseModelPage } from './house-model.page';

describe('HouseModelPage', () => {
  let component: HouseModelPage;
  let fixture: ComponentFixture<HouseModelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HouseModelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
