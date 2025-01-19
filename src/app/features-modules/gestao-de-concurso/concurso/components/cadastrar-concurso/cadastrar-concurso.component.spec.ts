import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarConcursoComponent } from './cadastrar-concurso.component';

describe('CadastrarConcursoComponent', () => {
  let component: CadastrarConcursoComponent;
  let fixture: ComponentFixture<CadastrarConcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarConcursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
