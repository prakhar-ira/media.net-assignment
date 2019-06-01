import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteBooksComponent } from './favourite-books.component';

const routes: Routes = [
  {
    path: '',
    component: FavouriteBooksComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteBooksRoutingModule { }
