import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilInstituicaoEnsinoComponent } from './perfil-instituicao-ensino.component';

describe('PerfilInstituicaoEnsinoComponent', () => {
  let component: PerfilInstituicaoEnsinoComponent;
  let fixture: ComponentFixture<PerfilInstituicaoEnsinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilInstituicaoEnsinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilInstituicaoEnsinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
