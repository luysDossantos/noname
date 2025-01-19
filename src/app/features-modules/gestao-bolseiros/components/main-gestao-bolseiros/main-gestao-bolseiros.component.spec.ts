import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGestaoBolseirosComponent } from './main-gestao-bolseiros.component';

describe('MainGestaoBolseirosComponent', () => {
  let component: MainGestaoBolseirosComponent;
  let fixture: ComponentFixture<MainGestaoBolseirosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainGestaoBolseirosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainGestaoBolseirosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
