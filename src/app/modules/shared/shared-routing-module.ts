import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Shared } from './shared';

const routes: Routes = [{ path: '', component: Shared }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
