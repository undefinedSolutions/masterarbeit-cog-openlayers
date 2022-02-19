import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtstmsOrthoStrenzfeldComponent } from './wmtstms-ortho-strenzfeld.component';

describe('WmtstmsOrthoStrenzfeldComponent', () => {
  let component: WmtstmsOrthoStrenzfeldComponent;
  let fixture: ComponentFixture<WmtstmsOrthoStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmtstmsOrthoStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtstmsOrthoStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
