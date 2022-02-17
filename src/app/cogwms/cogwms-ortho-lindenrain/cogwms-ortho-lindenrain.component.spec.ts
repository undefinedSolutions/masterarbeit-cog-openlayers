import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogwmsOrthoLindenrainComponent } from './cogwms-ortho-lindenrain.component';

describe('CogwmsOrthoLindenrainComponent', () => {
  let component: CogwmsOrthoLindenrainComponent;
  let fixture: ComponentFixture<CogwmsOrthoLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogwmsOrthoLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogwmsOrthoLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
