import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path:'adjugate-matrix',
        loadChildren : () => import('../adjugate-matrix/adjugate-matrix.module').then(m=>m.AdjugateMatrixPageModule)
      }
      ,
      {
        path: 'inverse',
        loadChildren: () => import('../inverse-matrix/inverse-matrix.module').then(m=>m.InverseMatrixPageModule)
      },
      {
        path: 'library',
        loadChildren: () => import('../solution/solution.module').then(m=>m.SolutionPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
