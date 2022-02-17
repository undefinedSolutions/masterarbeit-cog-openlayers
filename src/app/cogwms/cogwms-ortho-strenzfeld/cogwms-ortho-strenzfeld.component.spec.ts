import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogwmsOrthoStrenzfeldComponent } from './cogwms-ortho-strenzfeld.component';

describe('CogwmsOrthoStrenzfeldComponent', () => {
  let component: CogwmsOrthoStrenzfeldComponent;
  let fixture: ComponentFixture<CogwmsOrthoStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogwmsOrthoStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogwmsOrthoStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
