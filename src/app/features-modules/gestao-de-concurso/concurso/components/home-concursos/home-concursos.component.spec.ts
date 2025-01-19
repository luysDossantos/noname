import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeConcursosComponent } from './home-concursos.component';

describe('HomeConcursosComponent', () => {
  let component: HomeConcursosComponent;
  let fixture: ComponentFixture<HomeConcursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeConcursosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeConcursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
