import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksListingRoutingModule } from './books-listing-routing.module';
import { BooksListingComponent } from './books-listing.component';

@NgModule({
  imports: [
    CommonModule,
    BooksListingRoutingModule
  ],
  declarations: [BooksListingComponent]
})
export class BooksListingModule { }
