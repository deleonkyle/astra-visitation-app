import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VillasDetailsPageRoutingModule } from './villas-details-routing.module';

import { VillasDetailsPage } from './villas-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VillasDetailsPageRoutingModule
  ],
  declarations: [VillasDetailsPage]
})
export class VillasDetailsPageModule {}
