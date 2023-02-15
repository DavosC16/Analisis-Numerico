import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InverseMatrixPage } from './inverse-matrix.page';

const routes: Routes = [
  {
    path: '',
    component: InverseMatrixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InverseMatrixPageRoutingModule {}
