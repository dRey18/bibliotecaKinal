import { Injectable } from '@angular/core';

import {Book} from './book.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  books: Book[] = [
    {
      id: '1',
      autor: 'autor: diego,',
      titulo: 'titulo: crea tu portada',
      image: 'assets/images/libro1.png',
      edicion: '10001',
      palabrasClave: 'ambiguo, insolito',
      descripcion: 'dedicado a tu alma vacia y simple',
      temas: 'Tu, el y yo, la mariposa enorme',
      copias: '100',
      disponibles: '50'
    },
    {
      id: '2',
      autor: 'Autor: Jacobo Gu',
      titulo: 'Titulo: mosnters Who Stare',
      image: 'assets/images/libro2.png',
      edicion: '10002',
      palabrasClave: 'Miedo, terror',
      descripcion: 'Dedicado al misterio',
      temas: 'La era misterial',
      copias: '70',
      disponibles: '30'
    },
    {
      id: '3',
      autor: 'Autor: Luxs is',
      titulo: 'Titulo: The abandones cluncker',
      image: 'assets/images/libro3.png',
      edicion: '10003',
      palabrasClave: 'Hechos en casa',
      descripcion: 'Dedicado a tu alma',
      temas: 'Despreciados',
      copias: '200',
      disponibles: '100'
    },
    {
      id: '4',
      autor: 'Autor: Arm pais',
      titulo: 'Titulo: The arrivals',
      image: 'assets/images/libro4.png',
      edicion: '10004',
      palabrasClave: 'DFuerte',
      descripcion: 'Disfruta de este gran libro',
      temas: 'Tu, el y yo, la mariposa enorme',
      copias: '100',
      disponibles: '50'
    },
    {
      id: '5',
      autor: 'Auto: Gladys',
      titulo: 'Titulo: El dia que ser perdio la cordura',
      image: 'assets/images/libro5.png',
      edicion: '10005',
      palabrasClave: 'Decepcion',
      descripcion: 'Aprende y disfruta',
      temas: 'Tu, el y yo, la mariposa enorme',
      copias: '250',
      disponibles: '30'
    }
  ];

  constructor() { }

  getAllLibros() {
    return this.books;
  }

  getLibros(id: string) {
    return this.books.find(item => id === item.id);
  }
}
