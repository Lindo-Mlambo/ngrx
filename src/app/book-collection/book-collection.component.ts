import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-collection',
  standalone: true,
  imports: [],
  templateUrl: './book-collection.component.html',
  styleUrl: './book-collection.component.css'
})
export class BookCollectionComponent {
@Input() books: ReadonlyArray<Book> = [];
@Output() remove = new EventEmitter<string>();
}
