import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtstmsOrthoLindenrainComponent } from './wmtstms-ortho-lindenrain.component';

describe('WmtstmsOrthoLindenrainComponent', () => {
  let component: WmtstmsOrthoLindenrainComponent;
  let fixture: ComponentFixture<WmtstmsOrthoLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmtstmsOrthoLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtstmsOrthoLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
