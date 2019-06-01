import { FavouriteBooksModule } from './favourite-books.module';

describe('FavouriteBooksModule', () => {
  let favouriteBooksModule: FavouriteBooksModule;

  beforeEach(() => {
    favouriteBooksModule = new FavouriteBooksModule();
  });

  it('should create an instance', () => {
    expect(favouriteBooksModule).toBeTruthy();
  });
});
