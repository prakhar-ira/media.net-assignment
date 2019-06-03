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

@Component({
  selector: 'app-favourite-books',
  templateUrl: './favourite-books.component.html',
  styleUrls: ['./favourite-books.component.scss']
})
export class FavouriteBooksComponent implements OnInit {
  @ViewChild('searchFavourites') searchFavourite: ElementRef;

favourites: any;
dummyFavourites: any;
  constructor() { }

  deleteFavourite(i) {
    this.favourites.splice(i, 1);
    this.dummyFavourites = [...this.favourites];
    localStorage.setItem('favorites', JSON.stringify(this.favourites));
    alert('Favourite removed!! Please refresh to see the count');
  }

  searchFavourites() {
    fromEvent(this.searchFavourite.nativeElement, 'keyup')
    .pipe(
      map((ev: any) => ev.target.value),
      debounceTime(300),
      distinctUntilChanged()
    )
    .subscribe((query: any) => {
      this.dummyFavourites = this.favourites.filter(favourite => favourite.name.includes(query));
    });
  }

  ngOnInit() {
    this.favourites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.dummyFavourites = [...this.favourites];
  }

}
