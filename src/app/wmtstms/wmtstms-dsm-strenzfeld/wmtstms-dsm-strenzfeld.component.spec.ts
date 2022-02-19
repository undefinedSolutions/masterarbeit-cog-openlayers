import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtstmsDsmStrenzfeldComponent } from './wmtstms-dsm-strenzfeld.component';

describe('WmtstmsDsmStrenzfeldComponent', () => {
  let component: WmtstmsDsmStrenzfeldComponent;
  let fixture: ComponentFixture<WmtstmsDsmStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmtstmsDsmStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtstmsDsmStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
