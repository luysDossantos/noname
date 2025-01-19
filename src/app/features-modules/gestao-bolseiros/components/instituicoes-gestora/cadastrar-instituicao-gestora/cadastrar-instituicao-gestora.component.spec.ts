import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInstituicaoGestoraComponent } from './cadastrar-instituicao-gestora.component';

describe('CadastrarInstituicaoGestoraComponent', () => {
  let component: CadastrarInstituicaoGestoraComponent;
  let fixture: ComponentFixture<CadastrarInstituicaoGestoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarInstituicaoGestoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarInstituicaoGestoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
