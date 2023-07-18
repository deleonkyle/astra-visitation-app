import { Injectable } from '@angular/core';
import { AgentSchedule } from '../models/agent-schedule.model';

@Injectable({
  providedIn: 'root'
})
export class AgentScheduleService {
  private agentSchedules: AgentSchedule[] = [
    { id: 1, agentName: 'Agent 1', date: '2023-07-19' },
    { id: 2, agentName: 'Agent 2', date: '2023-07-20' },
    { id: 3, agentName: 'Agent 3', date: '2023-07-21' },
  ];

  getAgentSchedules(): AgentSchedule[] {
    return this.agentSchedules;
  }

  getAgentScheduleById(id: number): AgentSchedule | undefined {
    return this.agentSchedules.find(schedule => schedule.id === id);
  }

  addAgentSchedule(agentSchedule: AgentSchedule): void {
    this.agentSchedules.push(agentSchedule);
  }

  updateAgentSchedule(agentSchedule: AgentSchedule): void {
    const index = this.agentSchedules.findIndex(schedule => schedule.id === agentSchedule.id);
    if (index !== -1) {
      this.agentSchedules[index] = agentSchedule;
    }
  }

  deleteAgentSchedule(id: number): void {
    this.agentSchedules = this.agentSchedules.filter(schedule => schedule.id !== id);
  }
}
