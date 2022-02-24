import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsDsmStrenzfeldStyleComponent } from './wms-dsm-strenzfeld-style.component';

describe('WmsDsmStrenzfeldStyleComponent', () => {
  let component: WmsDsmStrenzfeldStyleComponent;
  let fixture: ComponentFixture<WmsDsmStrenzfeldStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmsDsmStrenzfeldStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsDsmStrenzfeldStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
