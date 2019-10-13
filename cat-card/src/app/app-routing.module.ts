import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatCardListComponent } from './cat-card-list/cat-card-list.component';
import { CatCardFormComponent } from './cat-card-form/cat-card-form.component';


export const RouteComponent = [CatCardListComponent, CatCardFormComponent]

const routes: Routes = [
  { path: '', redirectTo: 'cat-card-list', pathMatch: 'full' },
  { path: 'cat-card-list', component: CatCardListComponent },
  { path: 'cat-card-form', component: CatCardFormComponent },
  { path: 'cat-card-form/:id', component: CatCardFormComponent },
  { path: '**', redirectTo: 'cat-card-list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
