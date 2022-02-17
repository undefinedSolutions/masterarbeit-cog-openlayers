import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmsDsmLindenrainComponent } from './wms-dsm-lindenrain.component';

describe('WmsDsmLindenrainComponent', () => {
  let component: WmsDsmLindenrainComponent;
  let fixture: ComponentFixture<WmsDsmLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmsDsmLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmsDsmLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
