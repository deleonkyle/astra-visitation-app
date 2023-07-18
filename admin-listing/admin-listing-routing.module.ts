import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminListingPage } from './admin-listing.page';

const routes: Routes = [
  {
    path: '',
    component: AdminListingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminListingPageRoutingModule {}
