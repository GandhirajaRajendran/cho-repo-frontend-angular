import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { GetComponent } from './get/get.component';


const routes: Routes = [
  {
    path: 'interface/create',
    component: CreateComponent
  },
  {
    path: 'interface/edit/:id',
    component: UpdateComponent
  },
  {
    path: 'interface',
    component: GetComponent
  },{
  path: '**',
  redirectTo: 'interface',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
