import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Ship } from '../../models/ship.model';
import { ShipsService } from '../../service/ships.service';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { GenericTableComponent } from '../generic-table/generic-table.component';
@Component({
  selector: 'app-ships-tables',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    GenericTableComponent,
  ],
  templateUrl: './ships-tables.component.html',
  styleUrl: './ships-tables.component.scss',
})
export class ShipsTablesComponent implements OnInit {
  dataSource = new MatTableDataSource<Ship>([]);
  displayedColumns: string[] = ['id', 'name', 'maxSpeed', 'actions'];
  isLoading = true;
  shipColumns = [
    { key: 'id', label: 'ID' },
    { key: 'name', label: 'Name' },
    { key: 'maxSpeed', label: 'Max Speed' },
  ];

  get ships(): Ship[] {
    return this.dataSource.data;
  }

  constructor(private shipsService: ShipsService) {}

  ngOnInit(): void {
    this.loadShips();
  }

  loadShips(): void {
    this.isLoading = true;
    this.shipsService.getAllShips().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading ships', error);
        this.isLoading = false;
      },
    });
  }

  addShip(): void {
    console.log('Add ship');
  }

  editShip(ship: Ship): void {
    console.log('Edit', ship);
  }

  deleteShip(ship: Ship): void {
    const isConfirmed = window.confirm(
      `Are you sure you want to delete the ship "${ship.name}"?`
    );
    if (isConfirmed) {
      this.shipsService.deleteShip(ship.id).subscribe({
        next: () => {
          console.log(`Ship "${ship.name}" deleted successfully.`);
          this.loadShips();
        },
        error: (error) => {
          console.error(`Error deleting ship "${ship.name}":`, error);
        },
      });
    } else {
      console.log('Deletion canceled.');
    }
  }
}
