import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseReservationPage } from './house-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: HouseReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseReservationPageRoutingModule {}
