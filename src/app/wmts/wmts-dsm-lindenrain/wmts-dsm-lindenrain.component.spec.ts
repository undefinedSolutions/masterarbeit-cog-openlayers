import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WmtsDsmLindenrainComponent } from './wmts-dsm-lindenrain.component';

describe('WmtsDsmLindenrainComponent', () => {
  let component: WmtsDsmLindenrainComponent;
  let fixture: ComponentFixture<WmtsDsmLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WmtsDsmLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WmtsDsmLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
