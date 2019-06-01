import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddBooksRoutingModule } from './add-books-routing.module';
import { AddBooksComponent } from './add-books.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    AddBooksRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddBooksComponent]
})
export class AddBooksModule { }
