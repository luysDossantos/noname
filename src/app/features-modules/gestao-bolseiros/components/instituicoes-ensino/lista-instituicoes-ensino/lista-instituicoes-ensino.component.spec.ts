import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaInstituicoesEnsinoComponent } from './lista-instituicoes-ensino.component';

describe('ListaInstituicoesEnsinoComponent', () => {
  let component: ListaInstituicoesEnsinoComponent;
  let fixture: ComponentFixture<ListaInstituicoesEnsinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaInstituicoesEnsinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaInstituicoesEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
