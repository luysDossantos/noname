import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheBolsaComponent } from './detalhe-bolsa.component';

describe('DetalheBolsaComponent', () => {
  let component: DetalheBolsaComponent;
  let fixture: ComponentFixture<DetalheBolsaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheBolsaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheBolsaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
