import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Starter } from './starter';
import { StarterPricing } from './components/starter-pricing/starter-pricing';
import { StarterHomeContext } from './components/starter-home-context/starter-home-context';

const routes: Routes = [
  {
    path: '',
    component: Starter,
    children: [
      { path: '', redirectTo: '/starter/home', pathMatch: 'full' },
      { path: 'home', component: StarterHomeContext },
      { path: 'pricing', component: StarterPricing },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StarterRoutingModule {}
