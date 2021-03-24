import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfounfdComponent } from './component/pagenotfounfd/pagenotfounfd.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: '', component: RegistrationComponent, pathMatch: 'full' },
  // { path: 'pageNotFound', component: PagenotfounfdComponent },
  { path: '**', component: PagenotfounfdComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
