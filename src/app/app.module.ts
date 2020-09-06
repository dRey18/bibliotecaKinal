import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
