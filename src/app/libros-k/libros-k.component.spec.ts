import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosKComponent } from './libros-k.component';

describe('LibrosKComponent', () => {
  let component: LibrosKComponent;
  let fixture: ComponentFixture<LibrosKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
