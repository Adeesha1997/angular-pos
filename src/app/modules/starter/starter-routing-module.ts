import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Starter } from './starter';

const routes: Routes = [{ path: '', component: Starter }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarterRoutingModule { }
