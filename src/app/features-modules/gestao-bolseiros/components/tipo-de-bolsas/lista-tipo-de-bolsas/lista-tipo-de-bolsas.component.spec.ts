import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTipoDeBolsasComponent } from './lista-tipo-de-bolsas.component';

describe('ListaTipoDeBolsasComponent', () => {
  let component: ListaTipoDeBolsasComponent;
  let fixture: ComponentFixture<ListaTipoDeBolsasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTipoDeBolsasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTipoDeBolsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
