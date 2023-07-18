import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManorDetailsPage } from './manor-details.page';

const routes: Routes = [
  {
    path: '',
    component: ManorDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManorDetailsPageRoutingModule {}
