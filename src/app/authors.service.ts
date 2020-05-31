import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  AuthorsList = ["author1", "author2", "author3"];
  constructor() { }
  getAuthors(){
    return this.AuthorsList;
  }
}
