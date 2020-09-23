import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LibrosComponent} from './components/libros.component';
import { LibrosKComponent } from './libros-k/libros-k.component';
import { DemoComponent } from './demo/demo.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LibroDetailComponent } from './libro-detail/libro-detail.component';
import { LayoutComponent } from './layout/layout.component';
=======
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';

>>>>>>> 72df6c0... profile

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LibrosComponent,
    LibrosKComponent,
    DemoComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    LibroDetailComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
=======
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
>>>>>>> 72df6c0... profile
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
