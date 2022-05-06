import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-card-blog',
  templateUrl: './card-blog.component.html',
  styleUrls: ['./card-blog.component.scss'],
})
export class CardBlogComponent {
  @Input() blog: Blog = {
    id: 0,
    title: '',
    content: '',
    author: '',
    upVote: 0,
    downVote: 0,
  };
  @Output() changeView: EventEmitter<any> = new EventEmitter();
  @Output() increment: EventEmitter<any> = new EventEmitter();
  @Output() decrement: EventEmitter<any> = new EventEmitter();

  changeViewInner(blog: Blog) {
    this.changeView.emit(blog);
  }
  blogIncrement(id: Number) {
    this.increment.emit(id);
  }
  blogDecrement(id: Number) {
    this.decrement.emit(id);
  }
}
