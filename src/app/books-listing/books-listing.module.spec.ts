import { BooksListingModule } from './books-listing.module';

describe('BooksListingModule', () => {
  let booksListingModule: BooksListingModule;

  beforeEach(() => {
    booksListingModule = new BooksListingModule();
  });

  it('should create an instance', () => {
    expect(booksListingModule).toBeTruthy();
  });
});
