import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogDsmStrenzfeldStyleComponent } from './cog-dsm-strenzfeld-style.component';

describe('CogDsmStrenzfeldStyleComponent', () => {
  let component: CogDsmStrenzfeldStyleComponent;
  let fixture: ComponentFixture<CogDsmStrenzfeldStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogDsmStrenzfeldStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogDsmStrenzfeldStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
