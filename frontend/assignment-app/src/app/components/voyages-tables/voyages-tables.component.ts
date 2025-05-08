import { Component, OnInit, ViewChild } from '@angular/core';
import { Voyage } from '../../models/voyage.model';
import { MatTableDataSource } from '@angular/material/table';
import { VoyagesService } from '../../service/voyages.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GenericTableComponent } from '../generic-table/generic-table.component';

@Component({
  selector: 'app-voyages-tables',
  imports: [GenericTableComponent],
  templateUrl: './voyages-tables.component.html',
  styleUrl: './voyages-tables.component.scss',
})
export class VoyagesTablesComponent implements OnInit {
  dataSource = new MatTableDataSource<Voyage>([]);
  displayedColumns: string[] = [
    'id',
    'voyageDate',
    'departurePort.portName',
    'arrivalPort.portName',
    'ship.name',
  ];
  isLoading = true;
  voyageColumns = [
    { key: 'id', label: 'ID' },
    { key: 'voyageDate', label: 'Voyage Date' },
    { key: 'departurePort.portName', label: 'Departure Port' },
    { key: 'arrivalPort.portName', label: 'Arrival Port' },
    { key: 'ship.name', label: 'Ship Name' },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  get voyages(): Voyage[] {
    return this.dataSource.data;
  }
  constructor(private voyagesService: VoyagesService) {}

  ngOnInit(): void {
    this.loadVoyages();
  }
  loadVoyages() {
    this.isLoading = true;
    this.voyagesService.getAllVoyages().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading voyages', error);
        this.isLoading = false;
      },
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
