import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConcursosComponent } from './lista-concursos.component';

describe('ListaConcursosComponent', () => {
  let component: ListaConcursosComponent;
  let fixture: ComponentFixture<ListaConcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaConcursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaConcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
