import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTipoDeBolsasComponent } from './cadastrar-tipo-de-bolsas.component';

describe('CadastrarTipoDeBolsasComponent', () => {
  let component: CadastrarTipoDeBolsasComponent;
  let fixture: ComponentFixture<CadastrarTipoDeBolsasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarTipoDeBolsasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTipoDeBolsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
