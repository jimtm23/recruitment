import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AdminAccountService} from './adminAccount.service';


import {AdminAccountRoutingModule} from './adminAccount-routing.module';
import {AdminAccountShowComponent} from './adminAccount-show.component';
import {AdminAccountListComponent} from './adminAccount-list.component';
import {AdminAccountPersistComponent} from './adminAccount-persist.component';

@NgModule({
  declarations: [
    AdminAccountListComponent,
    AdminAccountPersistComponent,
    AdminAccountShowComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminAccountRoutingModule
  ],
  providers: [
    AdminAccountService
  ]
})
export class AdminAccountModule {}