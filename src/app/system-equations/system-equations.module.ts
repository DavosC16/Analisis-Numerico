import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemEquationsPageRoutingModule } from './system-equations-routing.module';

import { SystemEquationsPage } from './system-equations.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemEquationsPageRoutingModule
  ],
  declarations: [SystemEquationsPage]
})
export class SystemEquationsPageModule {}
