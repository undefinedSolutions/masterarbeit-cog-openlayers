import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsDsmStrenzfeldComponent } from './wms-dsm-strenzfeld.component';

describe('WmsDsmStrenzfeldComponent', () => {
  let component: WmsDsmStrenzfeldComponent;
  let fixture: ComponentFixture<WmsDsmStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmsDsmStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsDsmStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
