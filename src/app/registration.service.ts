import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  register(name: string, email: string, password: string, contact: string, gender: string, dob: Date | null): Observable<any> {
    // Construct the user registration data
    const userData = {
      name,
      email,
      password,
      contact,
      gender,
      dob
    };

    return this.http.post<any>(`${this.baseUrl}/users`, userData);
  }
}
