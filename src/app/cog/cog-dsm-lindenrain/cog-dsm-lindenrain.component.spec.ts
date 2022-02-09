import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogDsmLindenrainComponent } from './cog-dsm-lindenrain.component';

describe('CogDsmLindenrainComponent', () => {
  let component: CogDsmLindenrainComponent;
  let fixture: ComponentFixture<CogDsmLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogDsmLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogDsmLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
