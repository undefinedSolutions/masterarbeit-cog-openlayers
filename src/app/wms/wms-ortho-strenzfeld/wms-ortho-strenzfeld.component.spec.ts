import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsOrthoStrenzfeldComponent } from './wms-ortho-strenzfeld.component';

describe('WmsOrthoStrenzfeldComponent', () => {
  let component: WmsOrthoStrenzfeldComponent;
  let fixture: ComponentFixture<WmsOrthoStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmsOrthoStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsOrthoStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
