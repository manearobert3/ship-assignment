import { Voyage } from './voyage.model';

export interface Port {
  id: number;
  portName: string;
  portCountry: string;
  departingVoyages?: Voyage[];
  arrivingVoyages?: Voyage[];
}
