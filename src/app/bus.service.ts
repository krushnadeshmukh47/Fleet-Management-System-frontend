import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  constructor(private http: HttpClient) {}

  searchBuses(fromLocation: string, toLocation: string, date: string): Observable<any> {
    const url = `http://localhost:8000/api/search/${fromLocation}/${toLocation}/${date}`;
    return this.http.get<any>(url);
  }
}
