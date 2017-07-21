import {Routes} from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {LoginComponent} from "./login/login.component";
import {NavComponent} from "./nav/nav.component"
import { CanActivateAuthGuard } from './can-activate.authguard';

export const rootRouterConfig: Routes = [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', component: IndexComponent, canActivate: [CanActivateAuthGuard]},
    {path: 'login', component: LoginComponent},
    // {path: 'logout', component: NavComponent},
    { path: '**', redirectTo: '' }
];

