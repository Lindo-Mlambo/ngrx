import { createReducer, on } from "@ngrx/store";

import { BooksApiActions } from "./books.actions";
import { Book } from "../models/book.model";

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState, 
  on(BooksApiActions.retrieveBookList, (_state, {books}) => books)
);