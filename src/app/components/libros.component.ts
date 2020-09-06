import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import {Book} from '../book.model';

@Component({
    selector: 'app-book',
    templateUrl: './libros.component.html',
    styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit, DoCheck, OnDestroy {

    @Input() libro: Book;
    @Output() libroClicked: EventEmitter<any> = new EventEmitter();

    constructor(){
        console.log('1. constructor');
    }

    // ngOnChanges(changes: SimpleChanges) {
    //   console.log('2. ngOnChanges');
    //    console.log(changes);
    // }

    ngOnInit(){
        console.log('3. ngOnInit');
    }

    ngDoCheck(){
        console.log('4. DoCheck');
    }

    ngOnDestroy(){
        console.log('5. onDestroy');
    }

    addLibro() {
        console.log('añadir libro a la libreria');
        this.libroClicked.emit(this.libro.id);
    }
}
