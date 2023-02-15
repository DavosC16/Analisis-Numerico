import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InverseMatrixPageRoutingModule } from './inverse-matrix-routing.module';

import { InverseMatrixPage } from './inverse-matrix.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InverseMatrixPageRoutingModule
  ],
  declarations: [InverseMatrixPage]
})
export class InverseMatrixPageModule {}
