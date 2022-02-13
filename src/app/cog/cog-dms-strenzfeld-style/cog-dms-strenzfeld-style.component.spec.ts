import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CogDmsStrenzfeldStyleComponent } from './cog-dms-strenzfeld-style.component';

describe('CogDmsStrenzfeldStyleComponent', () => {
  let component: CogDmsStrenzfeldStyleComponent;
  let fixture: ComponentFixture<CogDmsStrenzfeldStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CogDmsStrenzfeldStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CogDmsStrenzfeldStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
