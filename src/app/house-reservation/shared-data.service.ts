import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Agent } from '../agent-selection/agent';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  private selectedDateSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedDate$: Observable<string> = this.selectedDateSubject.asObservable();

  private selectedAgentSubject: BehaviorSubject<Agent | null> = new BehaviorSubject<Agent | null>(null);
  public selectedAgent$: Observable<Agent | null> = this.selectedAgentSubject.asObservable();

  constructor() {}

  setSelectedDate(date: string) {
    this.selectedDateSubject.next(date);
  }

  setSelectedAgent(agent: Agent | null) {
    this.selectedAgentSubject.next(agent);
  }

  getSelectedDate(): string {
    return this.selectedDateSubject.value;
  }

  getSelectedAgent(): Agent | null {
    return this.selectedAgentSubject.value;
  }
}
