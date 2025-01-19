import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VincularBolseiroComponent } from './vincular-bolseiro.component';

describe('VincularBolseiroComponent', () => {
  let component: VincularBolseiroComponent;
  let fixture: ComponentFixture<VincularBolseiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VincularBolseiroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VincularBolseiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
