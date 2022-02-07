import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogOrthoLindenrainComponent } from './cog-ortho-lindenrain.component';

describe('CogOrthoLindenrainComponent', () => {
  let component: CogOrthoLindenrainComponent;
  let fixture: ComponentFixture<CogOrthoLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogOrthoLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogOrthoLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
