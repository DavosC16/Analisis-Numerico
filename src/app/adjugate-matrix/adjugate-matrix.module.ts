import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdjugateMatrixPageRoutingModule } from './adjugate-matrix-routing.module';

import { AdjugateMatrixPage } from './adjugate-matrix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdjugateMatrixPageRoutingModule
  ],
  declarations: [AdjugateMatrixPage]
})
export class AdjugateMatrixPageModule {}
