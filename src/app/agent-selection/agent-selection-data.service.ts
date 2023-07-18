import { Injectable } from '@angular/core';
import { Agent } from '../agent-selection/agent';

@Injectable()
export class AgentSelectionDataService {
  private selectedAgent: Agent | null = null;

  setSelectedAgent(agent: Agent) {
    this.selectedAgent = agent;
  }

  getSelectedAgent(): Agent | null {
    return this.selectedAgent;
  }
}
