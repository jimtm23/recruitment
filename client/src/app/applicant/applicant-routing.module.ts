import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {ApplicantListComponent} from './applicant-list.component';
import {ApplicantPersistComponent} from './applicant-persist.component';
import {ApplicantShowComponent} from './applicant-show.component';
import { CanActivateAuthGuard } from '../can-activate.authguard';

const routes: Routes = [
  {path: 'applicant', redirectTo: 'applicant/list', pathMatch: 'full', canActivate: [CanActivateAuthGuard]},
  {path: 'applicant/list', component: ApplicantListComponent, canActivate: [CanActivateAuthGuard]},
  {path: 'applicant/create', component: ApplicantPersistComponent, canActivate: [CanActivateAuthGuard]},
  {path: 'applicant/edit/:id', component: ApplicantPersistComponent, canActivate: [CanActivateAuthGuard]},
  {path: 'applicant/show/:id', component: ApplicantShowComponent, canActivate: [CanActivateAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicantRoutingModule {}