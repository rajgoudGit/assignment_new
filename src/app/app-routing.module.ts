import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';


import { AuthorisedLayoutComponent } from './navcomp/authorised-layout/authorised-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {   
    path: 'login',
    component: LoginComponent
  },  
  {
    path: '',
    component: AuthorisedLayoutComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
