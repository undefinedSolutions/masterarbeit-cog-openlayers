import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsOrthoStrenzfeldComponent } from './wmts-ortho-strenzfeld.component';

describe('WmtsOrthoStrenzfeldComponent', () => {
  let component: WmtsOrthoStrenzfeldComponent;
  let fixture: ComponentFixture<WmtsOrthoStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmtsOrthoStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsOrthoStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
