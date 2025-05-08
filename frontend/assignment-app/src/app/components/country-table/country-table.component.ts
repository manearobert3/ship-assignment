import { Component, OnInit } from '@angular/core';
import { GenericTableComponent } from '../generic-table/generic-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { Country } from '../../models/country.model';
import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-country-table',
  imports: [GenericTableComponent],
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.scss',
})
export class CountryTableComponent implements OnInit {
  dataSource = new MatTableDataSource<Country>([]);
  displayedColumns: string[] = ['id', 'countryName', 'visitedDate'];

  isLoading = true;

  countryColumns = [
    {
      key: 'id',
      label: 'ID',
    },
    {
      key: 'countryName',
      label: 'Country Name',
    },
    {
      key: 'visitedDate',
      label: 'Visited Date',
    },
  ];

  get countries(): Country[] {
    return this.dataSource.data;
  }

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadsCountries();
  }

  loadsCountries() {
    this.isLoading = true;
    this.countryService.getAllCountries().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading countries.', error);
        this.isLoading = false;
      },
    });
  }
}
