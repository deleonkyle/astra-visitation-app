import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseModelPageRoutingModule } from './house-model-routing.module';

import { HouseModelPage } from './house-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseModelPageRoutingModule
  ],
  declarations: [HouseModelPage]
})
export class HouseModelPageModule {}
