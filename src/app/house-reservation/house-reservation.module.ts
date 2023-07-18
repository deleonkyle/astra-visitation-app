import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseReservationPageRoutingModule } from './house-reservation-routing.module';

import { HouseReservationPage } from './house-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseReservationPageRoutingModule
  ],
  declarations: [HouseReservationPage]
})
export class HouseReservationPageModule {}
