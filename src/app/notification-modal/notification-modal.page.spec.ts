import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationModalPage } from './notification-modal.page';

describe('NotificationModalPage', () => {
  let component: NotificationModalPage;
  let fixture: ComponentFixture<NotificationModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NotificationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
