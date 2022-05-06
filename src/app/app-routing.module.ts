import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDisplayComponent } from './blog-display/blog-display.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    children: [
      {
        path: 'blog',
        component: BlogDisplayComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
