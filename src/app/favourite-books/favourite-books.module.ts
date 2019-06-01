import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteBooksRoutingModule } from './favourite-books-routing.module';
import { FavouriteBooksComponent } from './favourite-books.component';

@NgModule({
  imports: [
    CommonModule,
    FavouriteBooksRoutingModule
  ],
  declarations: [FavouriteBooksComponent]
})
export class FavouriteBooksModule { }
