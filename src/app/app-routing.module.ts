import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {LibrosKComponent} from './libros-k/libros-k.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {DemoComponent} from './demo/demo.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LibroDetailComponent } from './libro-detail/libro-detail.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'libros',
        component: LibrosKComponent
      },
      {
        path: 'libros/:id',
        component: LibroDetailComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },

    ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
