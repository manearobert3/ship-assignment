import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsGraphComponent } from './ships-graph.component';

describe('ShipsGraphComponent', () => {
  let component: ShipsGraphComponent;
  let fixture: ComponentFixture<ShipsGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipsGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipsGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
