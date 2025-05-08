import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { ShipsTablesComponent } from '../../components/ships-tables/ships-tables.component';
import { VoyagesTablesComponent } from '../../components/voyages-tables/voyages-tables.component';
import { PortsTableComponent } from '../../components/ports-table/ports-table.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatTabsModule,
    ShipsTablesComponent,
    VoyagesTablesComponent,
    PortsTableComponent,
    CountryTableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
