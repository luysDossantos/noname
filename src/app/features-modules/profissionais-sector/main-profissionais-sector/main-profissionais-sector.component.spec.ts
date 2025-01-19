import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainProfissionaisSectorComponent } from './main-profissionais-sector.component';

describe('MainProfissionaisSectorComponent', () => {
  let component: MainProfissionaisSectorComponent;
  let fixture: ComponentFixture<MainProfissionaisSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainProfissionaisSectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainProfissionaisSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
