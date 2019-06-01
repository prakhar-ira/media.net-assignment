import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteBooksComponent } from './favourite-books.component';

describe('FavouriteBooksComponent', () => {
  let component: FavouriteBooksComponent;
  let fixture: ComponentFixture<FavouriteBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
