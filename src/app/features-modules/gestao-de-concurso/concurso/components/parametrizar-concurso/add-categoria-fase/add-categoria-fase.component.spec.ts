import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoriaFaseComponent } from './add-categoria-fase.component';

describe('AddCategoriaFaseComponent', () => {
  let component: AddCategoriaFaseComponent;
  let fixture: ComponentFixture<AddCategoriaFaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCategoriaFaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoriaFaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
