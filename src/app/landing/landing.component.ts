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
    this.booksCount = localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')).length : 0 ;
    this.favouritesCount = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')).length : 0;
    console.log( this.booksCount);
    console.log( this.favouritesCount);

  }

}
