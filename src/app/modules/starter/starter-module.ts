import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing-module';
import { Starter } from './starter';


@NgModule({
  declarations: [
    Starter
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
