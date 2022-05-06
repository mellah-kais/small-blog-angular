import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blog-display',
  templateUrl: './blog-display.component.html',
  styleUrls: ['./blog-display.component.scss'],
})
export class BlogDisplayComponent implements OnInit {
  constructor(public router: Router) {}
  @Input() currentBlog: Blog = {
    id: 0,
    title: '',
    content: '',
    author: '',
    upVote: 0,
    downVote: 0,
  };
  ngOnInit(): void {
    console.log(this.router);
  }
}
