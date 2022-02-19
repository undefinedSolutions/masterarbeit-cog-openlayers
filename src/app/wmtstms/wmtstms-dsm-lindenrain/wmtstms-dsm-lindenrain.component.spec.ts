import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtstmsDsmLindenrainComponent } from './wmtstms-dsm-lindenrain.component';

describe('WmtstmsDsmLindenrainComponent', () => {
  let component: WmtstmsDsmLindenrainComponent;
  let fixture: ComponentFixture<WmtstmsDsmLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmtstmsDsmLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtstmsDsmLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
