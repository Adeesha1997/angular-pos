import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarterRoutingModule } from './starter-routing-module';
import { Starter } from './starter';
import { StarterHeader } from './components/starter-header/starter-header';
import { StarterFooter } from './components/starter-footer/starter-footer';
import { StarterMainSlider } from './components/starter-home-context/inner-item/starter-main-slider/starter-main-slider';
import { StarterMainServices } from './components/starter-home-context/inner-item/starter-main-services/starter-main-services';
import { StarterPricing } from './components/starter-pricing/starter-pricing';
import { StarterHomeContext } from './components/starter-home-context/starter-home-context';



@NgModule({
  declarations: [
    Starter,
    StarterHeader,
    StarterFooter,
    StarterMainSlider,
    StarterMainServices,
    StarterPricing,
    StarterHomeContext,
  ],
  imports: [
    CommonModule,
    StarterRoutingModule
  ]
})
export class StarterModule { }
