import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from '@core/providers/http/api.service';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private readonly path = 'bolsa';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}

  // List all countries
  list(params?: any): Observable<any[]> {
    return this.apiService.get<{ data: any[] }>(`${this.path}/getAllPais`, params ? new HttpParams({
      fromObject: params
    }) : this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  // Create new country
  public store(pais: any): Observable<any> {
    return this.apiService
      .post<{ object: any }>(`${this.path}/AddPais`, pais)
      .pipe(
        map((response) => response.object)
      );
  }

  // Update existing country
  public update(pais: any, id: string): Observable<any> {
    return this.apiService
      .put<{ object: any }>(`${this.path}/UpdatePais/${id}`, pais)
      .pipe(
        map((response) => response.object)
      );
  }

  // Delete existing country
  delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeletePaisById/${id}`);
  }

  // Get country by ID
  public show(id: string): Observable<any> {
    return this.apiService.get<{ object: any }>(`${this.path}/getPaisById/${id}`).pipe(
      map(response => response.object)
    );
  }
}
