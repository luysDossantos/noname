import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEmpresa02Component } from './card-empresa-02.component';

describe('CardEmpresa02Component', () => {
  let component: CardEmpresa02Component;
  let fixture: ComponentFixture<CardEmpresa02Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardEmpresa02Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardEmpresa02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
