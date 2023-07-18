import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentSelectionService } from '../confirmation/agent-selection.service';
import { Agent } from '../agent-selection/agent';
import { ToastController } from '@ionic/angular';
import { SharedDataService } from '../house-reservation/shared-data.service';

@Component({
  selector: 'app-agent-selection',
  templateUrl: './agent-selection.page.html',
  styleUrls: ['./agent-selection.page.scss'],
})
export class AgentSelectionPage {
  public selectedDate: string = '';
  public availableAgents: Agent[] = [];
  public selectedAgent: Agent | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public agentSelectionService: AgentSelectionService,
    private toastController: ToastController,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.selectedDate = params['date'];
      this.sharedDataService.setSelectedDate(this.selectedDate);
      this.retrieveAvailableAgents();
    });
  }
  

  retrieveAvailableAgents() {
    setTimeout(() => {
      this.availableAgents = [
        {
          id: 1,
          name: 'Agent 1',
          email: 'agent1@example.com',
          contactNumber: '+1234567890',
          status: 'Available'
        },
        {
          id: 2,
          name: 'Agent 2',
          email: 'agent2@example.com',
          contactNumber: '+9876543210',
          status: 'Available'
        },
        {
          id: 3,
          name: 'Agent 3',
          email: 'agent3@example.com',
          contactNumber: '+111222333',
          status: 'Available'
        }
      ];
    }, 2000); // Simulating a delay of 2 seconds
  }

  selectAgent(agent: Agent) {
    this.agentSelectionService.selectAgent(agent);
    this.selectedAgent = agent;
  }

  async confirmReservation() {
    if (this.selectedAgent !== null) {
      this.router.navigate(['/confirmation'], {
        queryParams: {
          date: this.selectedDate,
          agent: JSON.stringify(this.selectedAgent)
        }
      });
    } else {
      const toast = await this.toastController.create({
        message: 'Please select an agent before confirming.',
        duration: 2000,
        color: 'danger',
        position: 'top'
      });
      toast.present();
    }
  }
}
