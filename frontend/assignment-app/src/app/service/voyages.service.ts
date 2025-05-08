import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Voyage } from '../models/voyage.model';

@Injectable({
  providedIn: 'root',
})
export class VoyagesService {
  private voyageApiUrl = `${environment.apiUrl}/voyage`;

  constructor(private http: HttpClient) {}

  getAllVoyages(): Observable<Voyage[]> {
    return this.http.get<Voyage[]>(this.voyageApiUrl);
  }
}
