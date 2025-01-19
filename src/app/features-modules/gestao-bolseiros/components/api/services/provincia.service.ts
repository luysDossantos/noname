import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/providers/http/api.service';
import { Provincia } from '../models/provincia.model';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private readonly path = 'bolsa';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}

  list(params?: any): Observable<Provincia[]> {
    return this.apiService.get<{ data: Provincia[] }>(`${this.path}/getAllProvincia`, params ? new HttpParams({
      fromObject: params
    }) : this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  public show(id: string): Observable<Provincia> {
    return this.apiService.get<{ object: Provincia }>(`${this.path}/getProvinciaById/${id}`).pipe(
      map(response => response.object as Provincia)
    );
  }

  public store(provincia: Provincia): Observable<Provincia> {
    return this.apiService
      .post<{ object: Provincia }>(`${this.path}/AddProvincia`, provincia)
      .pipe(
        map((response) => response.object as Provincia)
      );
  }

  public update(provincia: Provincia, id: string): Observable<Provincia> {
    return this.apiService
      .put<{ object: Provincia }>(`${this.path}/UpdateProvincia/${id}`, provincia)
      .pipe(
        map((response) => response.object as Provincia)
      );
  }

  // Delete existing provincia
  delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeleteProvinciaById/${id}`);
  }
}
