import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import { authGuard } from './modules/shared/guards/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'starter/home',
    pathMatch: 'full',
  },
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
    path: 'console',
    loadChildren: () =>
      import('./modules/console/console-module').then((m) => m.ConsoleModule), canActivate:[authGuard]
  },
  {
    path: 'shared',
    loadChildren: () =>
      import('./modules/shared/shared-module').then((m) => m.SharedModule),
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
