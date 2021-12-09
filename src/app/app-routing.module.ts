import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'portail',
    pathMatch: 'full'
  },
  { path: 'portail',
    loadChildren: () => import('./portail/portail/portail.module').then(m => m.PortailModule),}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
