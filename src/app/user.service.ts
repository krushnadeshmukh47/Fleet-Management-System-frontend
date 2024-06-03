import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8000/api/users';

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<any> {
    const token = localStorage.getItem('userToken');
    const headers = new HttpHeaders(token ? { 'x-auth-token': token } : {});

    return this.http.get<any>(`${this.apiUrl}/me`, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return throwError(error);
  }
}
