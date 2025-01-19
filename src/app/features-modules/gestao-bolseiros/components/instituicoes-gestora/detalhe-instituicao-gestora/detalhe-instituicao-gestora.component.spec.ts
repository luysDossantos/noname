import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheInstituicaoGestoraComponent } from './detalhe-instituicao-gestora.component';

describe('DetalheInstituicaoGestoraComponent', () => {
  let component: DetalheInstituicaoGestoraComponent;
  let fixture: ComponentFixture<DetalheInstituicaoGestoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheInstituicaoGestoraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheInstituicaoGestoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
