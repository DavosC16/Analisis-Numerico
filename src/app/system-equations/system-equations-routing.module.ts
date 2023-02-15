import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemEquationsPage } from './system-equations.page';

const routes: Routes = [
  {
    path: '',
    component: SystemEquationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SystemEquationsPageRoutingModule {}
