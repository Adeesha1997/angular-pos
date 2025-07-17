import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../service/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
   const authService = inject(Auth);
  const router = inject(Router);

   if (authService.isExistsToken('my-Token')) {
    return true;
  } else {
    router.navigate(['/security/login']);
    return false;
  }
};
