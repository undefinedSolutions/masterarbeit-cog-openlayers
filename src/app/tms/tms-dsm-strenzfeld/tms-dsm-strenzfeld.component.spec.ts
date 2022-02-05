import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsDsmStrenzfeldComponent } from './tms-dsm-strenzfeld.component';

describe('TmsDsmStrenzfeldComponent', () => {
  let component: TmsDsmStrenzfeldComponent;
  let fixture: ComponentFixture<TmsDsmStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsDsmStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsDsmStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
