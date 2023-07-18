import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentSelectionPageRoutingModule } from './agent-selection-routing.module';

import { AgentSelectionPage } from './agent-selection.page';
import { SharedDataService } from '../house-reservation/shared-data.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentSelectionPageRoutingModule
  ],
  declarations: [AgentSelectionPage],
  providers: [SharedDataService]
})
export class AgentSelectionPageModule {}
