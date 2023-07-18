import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgentSelectionPage } from './agent-selection.page';

describe('AgentSelectionPage', () => {
  let component: AgentSelectionPage;
  let fixture: ComponentFixture<AgentSelectionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AgentSelectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
