import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'authors',
  template: `
    <h2>{{numOfAuth}} Authors</h2>
    <ul>
        <li *ngFor = "let author of authors">
            {{author}}
        </li>
    </ul>`
})
export class AuthorsComponent  {
  authors;
  numOfAuth;

  constructor(service: AuthorsService) {
    // this.numOfAuth = service.getAuthors();
    this.authors = service.getAuthors();
    this.numOfAuth = service.getAuthors().length;
  }

 

}
