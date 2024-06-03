import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bus } from './models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  searchBuses(fromLocation: string, toLocation: string, date: string): Observable<any> {
    const url = `${this.apiUrl}/search/${fromLocation}/${toLocation}/${date}`;
    return this.http.get<any>(url);
  }

  getBusDetails(busId: number | string): Observable<Bus> {
    return this.http.get<Bus>(`${this.apiUrl}/search/${busId}`);
  }

  bookSeats(busId: string, seatNumbers: number[], userId: string, amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/search/${busId}/book-seats`, { seatNumbers, userId, amount });
  }
}
