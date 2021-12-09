import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortailRoutingModule } from './portail-routing.module';
import { PortailComponent } from './portail.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    PortailComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    PortailRoutingModule,
    RouterModule
  ]
})
export class PortailModule { }
