import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Console } from './console';

const routes: Routes = [{ path: '', component: Console }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule { }
