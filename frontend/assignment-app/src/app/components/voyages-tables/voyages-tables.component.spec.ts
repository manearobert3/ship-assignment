import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyagesTablesComponent } from './voyages-tables.component';

describe('VoyagesTablesComponent', () => {
  let component: VoyagesTablesComponent;
  let fixture: ComponentFixture<VoyagesTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoyagesTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyagesTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
