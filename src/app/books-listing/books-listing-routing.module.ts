import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListingComponent } from './books-listing.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListingComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksListingRoutingModule { }
