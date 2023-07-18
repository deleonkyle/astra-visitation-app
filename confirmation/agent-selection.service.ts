import { Injectable } from '@angular/core';
import { Agent } from '../agent-selection/agent';
import { SharedDataService } from '../house-reservation/shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class AgentSelectionService {
  selectedAgent: Agent | null = null;

  constructor(
    private sharedDataService: SharedDataService
  ) {}

  selectAgent(agent: Agent) {
    this.selectedAgent = agent;
    this.sharedDataService.setSelectedAgent(agent);
  }

  clearSelection() {
    this.selectedAgent = null;
    this.sharedDataService.setSelectedAgent(null);
  }

  isSelectedAgent(agent: Agent): boolean {
    return this.selectedAgent === agent;
  }

  getSelectedAgent(): Agent | null {
    return this.selectedAgent;
  }
}
