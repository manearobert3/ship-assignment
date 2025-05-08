import { Injectable } from '@angular/core';
import { Country } from '../models/country.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private countryApiUrl = `${environment.apiUrl}/country`;

  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(this.countryApiUrl);
  }
}
