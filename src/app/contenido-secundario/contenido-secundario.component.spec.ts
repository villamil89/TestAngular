import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoSecundarioComponent } from './contenido-secundario.component';

describe('ContenidoSecundarioComponent', () => {
  let component: ContenidoSecundarioComponent;
  let fixture: ComponentFixture<ContenidoSecundarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoSecundarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
