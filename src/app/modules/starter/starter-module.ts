import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing-module';
import { Starter } from './starter';
import { StarterHeader } from './components/starter-header/starter-header';
import { StarterFooter } from './components/starter-footer/starter-footer';
import { StarterMainSlider } from './components/starter-main-slider/starter-main-slider';
import { StarterMainServices } from './components/starter-main-services/starter-main-services';



@NgModule({
  declarations: [
    Starter,
    StarterHeader,
    StarterFooter,
    StarterMainSlider,
    StarterMainServices,
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
