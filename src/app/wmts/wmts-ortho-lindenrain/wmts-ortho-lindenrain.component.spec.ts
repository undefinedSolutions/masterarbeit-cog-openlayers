import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsOrthoLindenrainComponent } from './wmts-ortho-lindenrain.component';

describe('WmtsOrthoLindenrainComponent', () => {
  let component: WmtsOrthoLindenrainComponent;
  let fixture: ComponentFixture<WmtsOrthoLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmtsOrthoLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsOrthoLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
