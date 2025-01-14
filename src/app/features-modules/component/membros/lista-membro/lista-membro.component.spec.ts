import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMembroComponent } from './lista-membro.component';

describe('ListaMembroComponent', () => {
  let component: ListaMembroComponent;
  let fixture: ComponentFixture<ListaMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
