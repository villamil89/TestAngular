import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDosComponent } from './contenido-dos.component';

describe('ContenidoDosComponent', () => {
  let component: ContenidoDosComponent;
  let fixture: ComponentFixture<ContenidoDosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoDosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
