import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Book } from "../models/book.model";

@Injectable()
export class GoogleBooksService {
  constructor(private http: HttpClient) {};

  getBooks(): Observable<Array<Book>> {
    return this.http.get<{items: Book[]}>('https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks')
    .pipe(map((books) => books.items || null));
  }
}