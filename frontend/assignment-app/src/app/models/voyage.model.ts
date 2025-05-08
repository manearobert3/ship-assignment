import { Port } from './port.model';
import { Ship } from './ship.model';

export interface Voyage {
  id: number;
  voyageDate: Date;
  departurePortId: number;
  departurePort: Port;
  arrivalPortId: number;
  arrivalPort: Port;
  shipId: number;
  ship: Ship;
  voyageStart: Date;
  voyageEnd: Date;
}
