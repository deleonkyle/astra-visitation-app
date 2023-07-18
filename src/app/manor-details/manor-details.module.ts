import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManorDetailsPageRoutingModule } from './manor-details-routing.module';

import { ManorDetailsPage } from './manor-details.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManorDetailsPageRoutingModule
  ],
  declarations: [ManorDetailsPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ManorDetailsPageModule {}
