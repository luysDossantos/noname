import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMembrosComponent } from './info-membros.component';

describe('InfoMembrosComponent', () => {
  let component: InfoMembrosComponent;
  let fixture: ComponentFixture<InfoMembrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMembrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMembrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
