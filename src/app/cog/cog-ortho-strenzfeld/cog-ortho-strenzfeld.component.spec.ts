import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogOrthoStrenzfeldComponent } from './cog-ortho-strenzfeld.component';

describe('CogOrthoStrenzfeldComponent', () => {
  let component: CogOrthoStrenzfeldComponent;
  let fixture: ComponentFixture<CogOrthoStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogOrthoStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogOrthoStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
