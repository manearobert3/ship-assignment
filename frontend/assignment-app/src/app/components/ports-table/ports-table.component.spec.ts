import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortsTableComponent } from './ports-table.component';

describe('PortsTableComponent', () => {
  let component: PortsTableComponent;
  let fixture: ComponentFixture<PortsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PortsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
