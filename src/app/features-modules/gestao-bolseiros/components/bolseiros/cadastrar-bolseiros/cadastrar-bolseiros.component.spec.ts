import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarBolseirosComponent } from './cadastrar-bolseiros.component';

describe('CadastrarBolseirosComponent', () => {
  let component: CadastrarBolseirosComponent;
  let fixture: ComponentFixture<CadastrarBolseirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarBolseirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarBolseirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
