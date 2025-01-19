import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadatrarBolsaComponent } from './cadatrar-bolsa.component';

describe('CadatrarBolsaComponent', () => {
  let component: CadatrarBolsaComponent;
  let fixture: ComponentFixture<CadatrarBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadatrarBolsaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadatrarBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
