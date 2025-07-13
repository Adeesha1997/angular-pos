import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Security } from './security';

const routes: Routes = [{ path: '', component: Security }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
