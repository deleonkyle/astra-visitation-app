import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentSelectionPage } from './agent-selection.page';

const routes: Routes = [
  {
    path: '',
    component: AgentSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentSelectionPageRoutingModule {}
