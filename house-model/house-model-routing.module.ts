import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseModelPage } from './house-model.page';

const routes: Routes = [
  {
    path: '',
    component: HouseModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseModelPageRoutingModule {}
