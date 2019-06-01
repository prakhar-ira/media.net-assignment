import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'add'
      },
      {
        path: 'list',
        loadChildren: './../books-listing/books-listing.module#BooksListingModule'
      },
      {
        path: 'add',
        loadChildren: './../add-books/add-books.module#AddBooksModule'
      },
      {
        path: 'favourite',
        loadChildren: './../favourite-books/favourite-books.module#FavouriteBooksModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
