import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsOrthoLindenrainComponent } from './tms-ortho-lindenrain.component';

describe('TmsOrthoLindenrainComponent', () => {
  let component: TmsOrthoLindenrainComponent;
  let fixture: ComponentFixture<TmsOrthoLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsOrthoLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsOrthoLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
