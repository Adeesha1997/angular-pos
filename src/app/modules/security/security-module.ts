import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing-module';
import { Security } from './security';
import { Login } from './components/login/login';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    Security,
    Login
  ],
    imports: [
        CommonModule,
        SecurityRoutingModule,
        FormsModule
    ]
})
export class SecurityModule { }
