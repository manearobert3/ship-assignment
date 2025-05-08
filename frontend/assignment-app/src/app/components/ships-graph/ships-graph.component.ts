import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { PortsService } from '../../service/ports.service';
import { BaseChartDirective } from 'ng2-charts';
import { ShipsService } from '../../service/ships.service';

@Component({
  selector: 'app-ships-graph',
  imports: [BaseChartDirective],
  templateUrl: './ships-graph.component.html',
  styleUrl: './ships-graph.component.scss',
})
export class ShipsGraphComponent implements OnInit {
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartOptions: ChartOptions<'bar'> = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Ship Name',
        },
        ticks: {
          maxRotation: 45,
          minRotation: 45,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Voyage Count',
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Number of Voyages per Ship',
      },
    },
  };
  constructor(private shipsService: ShipsService) {}

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Voyages',
        backgroundColor: [
          '#3f51b5', // Blue
          '#ff5722', // Orange
          '#4caf50', // Green
          '#f44336', // Red
          '#9c27b0', // Purple
        ],
        borderColor: '#303f9f',
        borderWidth: 1,
      },
    ],
  };
  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  ngOnInit(): void {
    this.loadVoyagesPerShip();
  }

  private loadVoyagesPerShip(): void {
    this.shipsService.getVoyagesPerShip().subscribe({
      next: (data) => {
        this.barChartData.labels = data.map((item) => item.name);
        this.barChartData.datasets[0].data = data.map((item) => item.count);

        this.chart?.update();
      },
      error: (err) => {
        console.error('Error loading voyages per ship:', err);
      },
    });
  }
}
