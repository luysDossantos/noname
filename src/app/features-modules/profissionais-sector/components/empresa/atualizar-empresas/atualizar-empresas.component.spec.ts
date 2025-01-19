import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarEmpresasComponent } from './atualizar-empresas.component';

describe('AtualizarEmpresasComponent', () => {
  let component: AtualizarEmpresasComponent;
  let fixture: ComponentFixture<AtualizarEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtualizarEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtualizarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
