import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdjugateMatrixPage } from './adjugate-matrix.page';

const routes: Routes = [
  {
    path: '',
    component: AdjugateMatrixPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdjugateMatrixPageRoutingModule {}
