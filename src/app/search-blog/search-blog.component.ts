import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-blog',
  templateUrl: './search-blog.component.html',
  styleUrls: ['./search-blog.component.scss'],
})
export class SearchBlogComponent {
  term: string = '';
  @Output() searchTerm = new EventEmitter();
  getTerm(event: any) {
    this.term = event.target.value;
    console.log(this.term);
  }
  searchThisTerm() {
    this.searchTerm.emit(this.term);
  }
}
