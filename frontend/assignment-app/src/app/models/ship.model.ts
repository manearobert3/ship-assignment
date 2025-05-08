import { Voyage } from './voyage.model';

export interface Ship {
  id: number;
  name: string;
  maxSpeed: number;
  voyages?: Voyage[];
}

export interface ShipVoyages {
  id: number;
  name: string;
  maxSpeed: string;
  count: number;
}
