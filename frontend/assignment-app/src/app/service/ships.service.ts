import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ship, ShipVoyages } from '../models/ship.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ShipsService {
  private shipApiUrl = `${environment.apiUrl}/ship`;

  constructor(private http: HttpClient) {}

  getAllShips(): Observable<Ship[]> {
    return this.http.get<Ship[]>(this.shipApiUrl);
  }
  getVoyagesPerShip(): Observable<ShipVoyages[]> {
    return this.http.get<ShipVoyages[]>(`${this.shipApiUrl}/voyages`);
  }
  deleteShip(id: number): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/ship/${id}`);
  }
}
