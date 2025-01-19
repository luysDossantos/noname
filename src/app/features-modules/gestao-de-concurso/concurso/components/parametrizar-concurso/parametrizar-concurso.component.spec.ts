import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametrizarConcursoComponent } from './parametrizar-concurso.component';

describe('ParametrizarConcursoComponent', () => {
  let component: ParametrizarConcursoComponent;
  let fixture: ComponentFixture<ParametrizarConcursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParametrizarConcursoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParametrizarConcursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
