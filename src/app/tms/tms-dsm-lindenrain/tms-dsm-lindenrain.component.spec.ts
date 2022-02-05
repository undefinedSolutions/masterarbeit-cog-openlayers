import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmsDsmLindenrainComponent } from './tms-dsm-lindenrain.component';

describe('TmsDsmLindenrainComponent', () => {
  let component: TmsDsmLindenrainComponent;
  let fixture: ComponentFixture<TmsDsmLindenrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TmsDsmLindenrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TmsDsmLindenrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
