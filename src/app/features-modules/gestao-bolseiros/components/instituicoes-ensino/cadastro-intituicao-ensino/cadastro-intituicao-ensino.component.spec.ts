import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroIntituicaoEnsinoComponent } from './cadastro-intituicao-ensino.component';

describe('CadastroIntituicaoEnsinoComponent', () => {
  let component: CadastroIntituicaoEnsinoComponent;
  let fixture: ComponentFixture<CadastroIntituicaoEnsinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroIntituicaoEnsinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroIntituicaoEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
