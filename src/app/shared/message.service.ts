import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject = new Subject<any>();

    setBooks(book: number = 0) {
        this.subject.next(book);
    }

    getBooks(): Observable<any> {
        return this.subject.asObservable();
    }

    setFavourites(favourite: number) {
      this.subject.next(favourite);
  }

    getFavourites(): Observable<any> {
        return this.subject.asObservable();
    }
}
