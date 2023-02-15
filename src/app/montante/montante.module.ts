import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontantePageRoutingModule } from './montante-routing.module';

import { MontantePage } from './montante.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontantePageRoutingModule
  ],
  declarations: [MontantePage]
})
export class MontantePageModule {}
