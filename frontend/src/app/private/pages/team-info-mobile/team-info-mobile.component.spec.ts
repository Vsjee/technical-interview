import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamInfoMobileComponent } from './team-info-mobile.component';

describe('TeamInfoMobileComponent', () => {
  let component: TeamInfoMobileComponent;
  let fixture: ComponentFixture<TeamInfoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamInfoMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamInfoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
