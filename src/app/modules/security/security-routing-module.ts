import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Security } from './security';
import { Login } from './components/login/login';

const routes: Routes = [{ path: '', component: Security, children:[
  {
    path:'login', component:Login
  }
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
