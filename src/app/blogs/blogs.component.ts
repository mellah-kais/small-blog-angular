import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as data from '../../../data.json';
import { Blog } from '../model/blog';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss'],
})
export class BlogsComponent implements OnInit {
  blogs: Blog[] = (data as any).default;
  filteredBlogs: Blog[] = this.blogs;
  blog: Blog = {
    id: 0,
    title: '',
    content: '',
    author: '',
    upVote: 0,
    downVote: 0,
  };
  displayCurrent: boolean = false;
  currentBlog: Blog = {
    id: 0,
    title: '',
    content: '',
    author: '',
    upVote: 0,
    downVote: 0,
  };
  constructor(public router: Router) {}
  ngOnInit() {
    console.log(this.blogs);
  }
  increment(id: any) {
    this.blogs.forEach((blog) => {
      if (blog.id === id) blog.upVote += 1;
    });
  }
  decrement(id: any) {
    this.blogs.forEach((blog) => {
      if (blog.id === id) blog.downVote += 1;
    });
  }
  changeView(blog: Blog) {
    this.currentBlog = blog;
    this.displayCurrent = true;
  }
  searchTerm(string: any) {
    string === '' || string === 'all'
      ? (this.filteredBlogs = this.blogs)
      : (this.filteredBlogs = this.blogs.filter(
          (element) => element.author === string
        ));
  }
}
