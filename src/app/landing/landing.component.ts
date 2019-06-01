import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  booksCount: any;
  favouritesCount: any;

  constructor() { }

  ngOnInit() {
    this.booksCount = JSON.parse(localStorage.getItem('books')).length;
    this.favouritesCount = JSON.parse(localStorage.getItem('favorites')).length;
    console.log( this.booksCount);
    console.log( this.favouritesCount);

  }

}
