import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './components/not-found-page/not-found-page';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'starter', 
    pathMatch: 'full' },
  {
    path: 'security',
    loadChildren: () =>
      import('./modules/security/security-module').then(
        (m) => m.SecurityModule
      ),
  },
  {
    path: 'starter',
    loadChildren: () =>
      import('./modules/starter/starter-module').then((m) => m.StarterModule),
  },
  {
    path:'**',
    component:NotFoundPage
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
