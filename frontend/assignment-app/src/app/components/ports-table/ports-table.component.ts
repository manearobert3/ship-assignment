import { Component, OnInit } from '@angular/core';
import { GenericTableComponent } from '../generic-table/generic-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { Port } from '../../models/port.model';
import { PortsService } from '../../service/ports.service';

@Component({
  selector: 'app-ports-table',
  imports: [GenericTableComponent],
  templateUrl: './ports-table.component.html',
  styleUrl: './ports-table.component.scss',
})
export class PortsTableComponent implements OnInit {
  dataSource = new MatTableDataSource<Port>([]);
  displayedColumns: string[] = [
    'id',
    'portName',
    'portCountry',
    'departingVoyages',
    'arrivingVoyages',
  ];

  isLoading = true;
  portsColumns = [
    {
      key: 'id',
      label: 'ID',
    },
    {
      key: 'portName',
      label: 'Port Name',
    },
    { key: 'portCountry', label: 'Port Country' },
    { key: 'departingVoyages', label: 'Departing Voyages' },
    { key: 'arrivingVoyages', label: 'Arriving Voyages' },
  ];

  get ports(): Port[] {
    return this.dataSource.data;
  }

  constructor(private portsService: PortsService) {}

  ngOnInit(): void {
    this.loadPorts();
  }

  loadPorts() {
    this.isLoading = true;
    this.portsService.getAllPorts().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading ports.', error);
        this.isLoading = false;
      },
    });
  }
}
