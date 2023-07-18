import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminListingPageRoutingModule } from './admin-listing-routing.module';

import { AdminListingPage } from './admin-listing.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminListingPageRoutingModule
  ],
  declarations: [AdminListingPage]
})
export class AdminListingPageModule {}
