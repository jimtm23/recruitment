import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {AdminAccountListComponent} from './adminAccount-list.component';
import {AdminAccountPersistComponent} from './adminAccount-persist.component';
import {AdminAccountShowComponent} from './adminAccount-show.component';

const routes: Routes = [
  {path: 'adminAccount', redirectTo: 'adminAccount/list', pathMatch: 'full'},
  {path: 'adminAccount/list', component: AdminAccountListComponent},
  {path: 'adminAccount/create', component: AdminAccountPersistComponent},
  {path: 'adminAccount/edit/:id', component: AdminAccountPersistComponent},
  {path: 'adminAccount/show/:id', component: AdminAccountShowComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminAccountRoutingModule {}