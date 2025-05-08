import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipsTablesComponent } from './ships-tables.component';

describe('ShipsTablesComponent', () => {
  let component: ShipsTablesComponent;
  let fixture: ComponentFixture<ShipsTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShipsTablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipsTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
