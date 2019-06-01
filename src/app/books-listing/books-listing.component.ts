import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  takeWhile,
  finalize,
  debounceTime,
  map,
  distinctUntilChanged
} from 'rxjs/operators';
import { Subject, fromEvent } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-books-listing',
  templateUrl: './books-listing.component.html',
  styleUrls: ['./books-listing.component.scss']
})
export class BooksListingComponent implements OnInit {
  @ViewChild('searchBooks') searchBook: ElementRef;
  books: any;
  dummyBooks: any[] = [];
  favourites: any[] = [];
  imageSource = '../../assets/favourite select.png';
  constructor(
    private router: Router
  ) { }

  addToFavourites(book: any, image) {
    this.favourites.push(book);
    localStorage.setItem('favorites', JSON.stringify(this.favourites));
    image.src = this.imageSource ? '../../assets/favourite.png' : this.imageSource;
    alert('Added to favourites!!');
  }

  searchBooks() {
    fromEvent(this.searchBook.nativeElement, 'keyup')
    .pipe(
      map((ev: any) => ev.target.value),
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe((query: any) => {
      this.dummyBooks = this.books.filter(book => book.name.includes(query));
    });
  }

  deleteBook(i) {
    this.books.splice(i, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    alert('Book deleted!!');
    this.ngOnInit();
  }

  ngOnInit() {
    this.searchBooks();
    this.books = JSON.parse(localStorage.getItem('books'));
    this.dummyBooks = [...this.books];
    this.favourites = JSON.parse(localStorage.getItem('favorites'));
    this.books.forEach(book => {
       this.favourites.forEach(favourite => {
      return this.imageSource = favourite.name === book.name
         ?  '../../assets/favourite.png'
         : '../../assets/favourite select.png';
       });
    });
  }
}
