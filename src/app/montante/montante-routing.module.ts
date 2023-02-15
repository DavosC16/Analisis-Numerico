import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontantePage } from './montante.page';

const routes: Routes = [
  {
    path: '',
    component: MontantePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontantePageRoutingModule {}
