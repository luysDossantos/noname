import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsMembroComponent } from './cards-membro.component';

describe('CardsMembroComponent', () => {
  let component: CardsMembroComponent;
  let fixture: ComponentFixture<CardsMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
