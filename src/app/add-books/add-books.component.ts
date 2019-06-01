import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
  styleUrls: ['./add-books.component.scss']
})
export class AddBooksComponent implements OnInit {
  books: any[] = [];
  addBookForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    author: ['', Validators.required],
    price: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  submit(book: any, valid: boolean) {
    console.log(book);
    if (!valid) {
      return alert('Please fill all required fields!!');
    }
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
    alert('Book has been added successfully!!');
    this.addBookForm.reset();
    this.router.navigate(['/refresh']);
  }

  ngOnInit() {
     this.books = JSON.parse(localStorage.getItem('books'));
  }

}
