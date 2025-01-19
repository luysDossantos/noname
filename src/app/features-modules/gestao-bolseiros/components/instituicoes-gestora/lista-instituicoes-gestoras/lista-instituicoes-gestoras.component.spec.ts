import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInstituicoesGestorasComponent } from './lista-instituicoes-gestoras.component';

describe('ListaInstituicoesGestorasComponent', () => {
  let component: ListaInstituicoesGestorasComponent;
  let fixture: ComponentFixture<ListaInstituicoesGestorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInstituicoesGestorasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInstituicoesGestorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
