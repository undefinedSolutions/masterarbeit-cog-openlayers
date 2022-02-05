import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsOrthoStrenzfeldComponent } from './tms-ortho-strenzfeld.component';

describe('TmsOrthoStrenzfeldComponent', () => {
  let component: TmsOrthoStrenzfeldComponent;
  let fixture: ComponentFixture<TmsOrthoStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsOrthoStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsOrthoStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
