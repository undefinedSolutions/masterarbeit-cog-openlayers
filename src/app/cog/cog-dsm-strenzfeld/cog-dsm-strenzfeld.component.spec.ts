import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogDsmStrenzfeldComponent } from './cog-dsm-strenzfeld.component';

describe('CogDsmStrenzfeldComponent', () => {
  let component: CogDsmStrenzfeldComponent;
  let fixture: ComponentFixture<CogDsmStrenzfeldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogDsmStrenzfeldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogDsmStrenzfeldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
