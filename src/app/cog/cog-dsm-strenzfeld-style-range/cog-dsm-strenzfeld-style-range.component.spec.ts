import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogDsmStrenzfeldStyleRangeComponent } from './cog-dsm-strenzfeld-style-range.component';

describe('CogDsmStrenzfeldStyleRangeComponent', () => {
  let component: CogDsmStrenzfeldStyleRangeComponent;
  let fixture: ComponentFixture<CogDsmStrenzfeldStyleRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogDsmStrenzfeldStyleRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogDsmStrenzfeldStyleRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
