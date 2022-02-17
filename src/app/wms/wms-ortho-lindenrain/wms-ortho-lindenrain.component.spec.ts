import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsOrthoLindenrainComponent } from './wms-ortho-lindenrain.component';

describe('WmsOrthoLindenrainComponent', () => {
  let component: WmsOrthoLindenrainComponent;
  let fixture: ComponentFixture<WmsOrthoLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmsOrthoLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsOrthoLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
