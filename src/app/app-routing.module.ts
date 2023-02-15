import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'montante',
    loadChildren: () => import('./montante/montante.module').then( m => m.MontantePageModule)
  },
  {
    path: 'system-equations',
    loadChildren: () => import('./system-equations/system-equations.module').then( m => m.SystemEquationsPageModule)
  },
  {
    path: 'inverse-matrix',
    loadChildren: () => import('./inverse-matrix/inverse-matrix.module').then( m => m.InverseMatrixPageModule)
  },
  {
    path: 'solution',
    loadChildren: () => import('./solution/solution.module').then( m => m.SolutionPageModule)
  },
  {
    path: 'adjugate-matrix',
    loadChildren: () => import('./adjugate-matrix/adjugate-matrix.module').then( m => m.AdjugateMatrixPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
