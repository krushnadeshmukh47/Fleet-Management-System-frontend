import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth`, { email, password })
    .pipe(tap(response => {
      if (response.token) {
        localStorage.setItem('userToken', response.token);
      }
    }));
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userToken');
  }

  logout() {
    localStorage.removeItem('userToken');
  }
}
