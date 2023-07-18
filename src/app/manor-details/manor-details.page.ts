import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ToastController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';
import { IonicSlides } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { IonDatetime } from '@ionic/angular';
import {NavController } from '@ionic/angular';
import { Router } from '@angular/router';

register();

@Component({
  selector: 'app-manor-details',
  templateUrl: './manor-details.page.html',
  styleUrls: ['./manor-details.page.scss'],
})
export class ManorDetailsPage {
  selectedDate!: string;

  @ViewChild('datetime') datetime!: IonDatetime;

  swiperModules = [IonicSlides];

  isModalOpen = false;

setOpen(isOpen: boolean) {
  this.isModalOpen = isOpen;
}
 constructor(
    private toastController: ToastController,
    private modalController: ModalController,
    private navController: NavController
  ) {}
  
  async presentToast(position: 'top') {
  const toast = await this.toastController.create({
    message: 'Book Completed!',
    duration: 1500,
    position: position,
    icon: "checkmark-circle",
  });

  await toast.present();
}
  swiperSlideChanged(e: any){
    console.log('changed: ',e);
  }
  async confirmDateTime() {
    // Display the selected date
    console.log(this.selectedDate);
    await this.modalController.dismiss();
    this.navController.navigateForward('/agent-selection', { queryParams: { selectedDate: this.selectedDate } });
  }
  
}
