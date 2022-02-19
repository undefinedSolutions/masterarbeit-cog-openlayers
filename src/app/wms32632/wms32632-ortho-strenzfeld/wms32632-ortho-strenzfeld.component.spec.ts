import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wms32632OrthoStrenzfeldComponent } from './wms32632-ortho-strenzfeld.component';

describe('Wms32632OrthoStrenzfeldComponent', () => {
  let component: Wms32632OrthoStrenzfeldComponent;
  let fixture: ComponentFixture<Wms32632OrthoStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wms32632OrthoStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wms32632OrthoStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
