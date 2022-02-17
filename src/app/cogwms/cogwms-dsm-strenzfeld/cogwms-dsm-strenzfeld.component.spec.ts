import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogwmsDsmStrenzfeldComponent } from './cogwms-dsm-strenzfeld.component';

describe('CogwmsDsmStrenzfeldComponent', () => {
  let component: CogwmsDsmStrenzfeldComponent;
  let fixture: ComponentFixture<CogwmsDsmStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogwmsDsmStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogwmsDsmStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
