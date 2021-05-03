import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { PagenotfounfdComponent } from './component/pagenotfounfd/pagenotfounfd.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  // { path: '', component: RegistrationComponent, pathMatch: 'full' },
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'pageNotFound', component: PagenotfounfdComponent },
  { path: '**', component: PagenotfounfdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
