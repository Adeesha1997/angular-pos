import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing-module';
import { Console } from './console';
import { ConsoleHeader } from './console-header/console-header';
import { ConsoleFooter } from './console-footer/console-footer';


@NgModule({
  declarations: [
    Console,
    ConsoleHeader,
    ConsoleFooter
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
