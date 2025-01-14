import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMembroComponent } from './add-membro.component';

describe('AddMembroComponent', () => {
  let component: AddMembroComponent;
  let fixture: ComponentFixture<AddMembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddMembroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
