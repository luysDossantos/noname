import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesactivarEmpresasComponent } from './desactivar-empresas.component';

describe('DesactivarEmpresasComponent', () => {
  let component: DesactivarEmpresasComponent;
  let fixture: ComponentFixture<DesactivarEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesactivarEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesactivarEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
