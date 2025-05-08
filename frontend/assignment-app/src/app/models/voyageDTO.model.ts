import { Ship } from './ship.model';

export interface VoyageDTO {
  id: number;
  voyageDate: Date;
  departurePort: string;
  arrivalPortId: number;
  arrivalPort: string;
  ship: number;
  voyageStart: Date;
  voyageEnd: Date;
}
