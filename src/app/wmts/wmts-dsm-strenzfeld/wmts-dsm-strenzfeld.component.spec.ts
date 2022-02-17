import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsDsmStrenzfeldComponent } from './wmts-dsm-strenzfeld.component';

describe('WmtsDsmStrenzfeldComponent', () => {
  let component: WmtsDsmStrenzfeldComponent;
  let fixture: ComponentFixture<WmtsDsmStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmtsDsmStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsDsmStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
