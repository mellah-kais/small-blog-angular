import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogDisplayComponent } from './blog-display/blog-display.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SearchBlogComponent } from './search-blog/search-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogDisplayComponent,
    CardBlogComponent,
    BlogsComponent,
    SearchBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
