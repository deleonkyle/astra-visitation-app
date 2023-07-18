import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AddPropertyModalPage } from '../add-property-modal/add-property-modal.page';
import { User } from '../models/user';
import { UserService } from './user.service';
import { PropertyService } from './property.service';
import { AgentScheduleService } from './agent-schedule.service';
import { Property } from '../models/property.model';
import { AgentSchedule } from '../models/agent-schedule.model';

@Component({
  selector: 'app-admin.home',
  templateUrl: './admin.home.page.html',
  styleUrls: ['./admin.home.page.scss'],
})
export class AdminHomePage {
  users: User[] = [];
  properties: Property[] = [];
  agentSchedules: AgentSchedule[] = [];

  constructor(
    private modalController: ModalController,
    private navController: NavController,
    private userService: UserService,
    private propertyService: PropertyService,
    private agentScheduleService: AgentScheduleService
  ) {}

  ngOnInit() {
    this.loadUsers();
    this.loadProperties();
    this.loadAgentSchedules();
  }

  loadUsers() {
    this.users = this.userService.getUsers();
  }

  loadProperties() {
    this.properties = this.propertyService.getProperties();
  }

  loadAgentSchedules() {
    this.agentSchedules = this.agentScheduleService.getAgentSchedules();
  }

  async openAddPropertyModal() {
    const modal = await this.modalController.create({
      component: AddPropertyModalPage,
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        // Add the newly created property to the list
        const newProperty = result.data as Property;
        this.properties.push(newProperty);
      }
    });

    await modal.present();
  }

  navigateToUserManagement() {
    this.navController.navigateForward('/user-management');
  }
  navigateToAgentSchedule() {
    this.navController.navigateForward('/agent-schedule');
  }
}
