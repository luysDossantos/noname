import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarEmpresasComponent } from './adicionar-empresas.component';

describe('AdicionarEmpresasComponent', () => {
  let component: AdicionarEmpresasComponent;
  let fixture: ComponentFixture<AdicionarEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
