import { AddBooksModule } from './add-books.module';

describe('AddBooksModule', () => {
  let addBooksModule: AddBooksModule;

  beforeEach(() => {
    addBooksModule = new AddBooksModule();
  });

  it('should create an instance', () => {
    expect(addBooksModule).toBeTruthy();
  });
});
