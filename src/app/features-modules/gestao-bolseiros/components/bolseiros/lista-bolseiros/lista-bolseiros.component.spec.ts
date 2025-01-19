import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBolseirosComponent } from './lista-bolseiros.component';

describe('ListaBolseirosComponent', () => {
  let component: ListaBolseirosComponent;
  let fixture: ComponentFixture<ListaBolseirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaBolseirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBolseirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
