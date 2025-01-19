import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '@environments/environment';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any): Observable<never> {
    return throwError(() => new Error(JSON.stringify(error)));
  }

  get<T>(path: string, httpParams: HttpParams = new HttpParams()): Observable<T> {
    return this.http
      .get<T>(`${environment.kcRedirectUri}${path}`, {
        headers: this.setHeaders(),
        params: httpParams,
      })
      .pipe(catchError(this.formatErrors));
  }

  put<T>(path: string, body: Object = {}, params?: HttpParams): Observable<T> {
    return this.http
      .put<T>(`${environment.kcRedirectUri}${path}`, body, {
        headers: this.setHeaders(),
        params
      })
      .pipe(catchError(this.formatErrors));
  }

  post<T>(path: string, body: Object = {}): Observable<T> {
    return this.http
      .post<T>(`${environment.kcRedirectUri}${path}`, body, {
        headers: this.setHeaders(),
      })
      .pipe(catchError(this.formatErrors));
  }

  delete<T>(path: string, httpParams: HttpParams = new HttpParams()): Observable<T> {
    return this.http
      .delete<T>(`${environment.kcRedirectUri}${path}`, {
        headers: this.setHeaders(),
        params: httpParams,
      })
      .pipe(catchError(this.formatErrors));
  }

  patch<T>(path: string, body: Object = {}): Observable<T> {
    return this.http
      .patch<T>(`${environment.kcRedirectUri}${path}`, body, {
        headers: this.setHeaders(),
      })
      .pipe(catchError(this.formatErrors));
  }
}
