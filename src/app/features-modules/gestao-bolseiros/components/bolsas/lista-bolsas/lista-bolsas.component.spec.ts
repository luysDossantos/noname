import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBolsasComponent } from './lista-bolsas.component';

describe('ListaBolsasComponent', () => {
  let component: ListaBolsasComponent;
  let fixture: ComponentFixture<ListaBolsasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBolsasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBolsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
