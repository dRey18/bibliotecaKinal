import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {LibrosService} from '../libros.service';
import {Book} from './../book.model';

@Component({
  selector: 'app-libro-detail',
  templateUrl: './libro-detail.component.html',
  styleUrls: ['./libro-detail.component.scss']
})
export class LibroDetailComponent implements OnInit {

  libro: Book;

  constructor(
    private route: ActivatedRoute,
    private librosService: LibrosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params ) => {
      const id = params.id;
      console.log(id);
      this.libro = this.librosService.getLibros(id);
    });
  }

}
