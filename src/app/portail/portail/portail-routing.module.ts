import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortailComponent } from './portail.component';

const routes: Routes = [{ path: '', component: PortailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortailRoutingModule { }
