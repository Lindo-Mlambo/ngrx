import {createActionGroup, props} from '@ngrx/store';
import { Book } from '../models/book.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{bookId: string}>(),
    'Remove Book': props<{bookId: string}>()
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Retrieve BookList': props<{books: ReadonlyArray<Book> }>(),
  },
});