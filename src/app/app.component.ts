import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { GoogleBooksService } from './services/books.service';
import { selectBookCollection, selectBooks } from './state/books.selectors';
import { BooksActions, BooksApiActions } from './state/books.actions';
import { BookListComponent } from "./book-list/book-list.component";
import { CommonModule } from '@angular/common';
import { BookCollectionComponent } from "./book-collection/book-collection.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    providers: [GoogleBooksService],
    imports: [RouterOutlet, BookListComponent, CommonModule, BookCollectionComponent]
})
export class AppComponent {
  title = 'ngrx';
  books$ = this.store.select(selectBooks);
  collection$ = this.store.select(selectBookCollection);

  
  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({bookId}));
  }
  
  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({bookId}));
  }
  
  constructor(private store: Store, private bookService: GoogleBooksService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => this.store.dispatch(BooksApiActions.retrieveBookList({books})));
  }
  
}
