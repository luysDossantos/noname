import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCandidaturasComponent } from './home-candidaturas.component';

describe('HomeCandidaturasComponent', () => {
  let component: HomeCandidaturasComponent;
  let fixture: ComponentFixture<HomeCandidaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCandidaturasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCandidaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
