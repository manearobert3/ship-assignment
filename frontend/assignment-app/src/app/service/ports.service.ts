import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Port } from '../models/port.model';

@Injectable({
  providedIn: 'root',
})
export class PortsService {
  private portApiUrl = `${environment.apiUrl}/port`;

  constructor(private http: HttpClient) {}

  getAllPorts(): Observable<Port[]> {
    return this.http.get<Port[]>(this.portApiUrl);
  }
}
