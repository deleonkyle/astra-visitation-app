import { Component, Input, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-notification-modal',
  templateUrl: './notification-modal.page.html',
  styleUrls: ['./notification-modal.page.scss'],
})
export class NotificationModalPage implements OnInit {
  selectedDate!: string;
  selectedAgent: any;

  constructor(
    private modalController: ModalController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.selectedDate = this.navParams.get('selectedDate');
    this.selectedAgent = this.navParams.get('selectedAgent');
  }

  close() {
    this.modalController.dismiss();
  }
  dismiss() {
    this.modalController.dismiss();
  }
}
