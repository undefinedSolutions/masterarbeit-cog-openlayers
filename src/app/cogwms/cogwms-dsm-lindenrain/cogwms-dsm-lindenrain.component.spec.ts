import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogwmsDsmLindenrainComponent } from './cogwms-dsm-lindenrain.component';

describe('CogwmsDsmLindenrainComponent', () => {
  let component: CogwmsDsmLindenrainComponent;
  let fixture: ComponentFixture<CogwmsDsmLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogwmsDsmLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogwmsDsmLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
