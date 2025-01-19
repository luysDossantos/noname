import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCandidaturasComponent } from './lista-candidaturas.component';

describe('ListaCandidaturasComponent', () => {
  let component: ListaCandidaturasComponent;
  let fixture: ComponentFixture<ListaCandidaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaCandidaturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
