import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/providers/http/api.service';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { Utilizador } from '../models/utilizador.model';

@Injectable({
  providedIn: 'root'
})
export class UtilizadorService {
  private readonly path = 'utilizador';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}

  // List all utilizadores
  list(params?: any): Observable<Utilizador[]> {
    return this.apiService.get<{ data: Utilizador[] }>(`${this.path}/getAllUtilizador`, params ? new HttpParams({
      fromObject: params
    }) : this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  // Get utilizador by ID
  public show(id: string): Observable<Utilizador> {
    return this.apiService.get<{ object: Utilizador }>(`${this.path}/getUtilizadorById/${id}`).pipe(
      map(response => response.object as Utilizador)
    );
  }

  // Create new utilizador
  public store(utilizador: Utilizador): Observable<Utilizador> {
    return this.apiService
      .post<{ object: Utilizador }>(`${this.path}/AddUtilizador`, utilizador)
      .pipe(
        map((response) => response.object as Utilizador)
      );
  }

  // Update existing utilizador
  public update(utilizador: Utilizador): Observable<Utilizador> {
    return this.apiService
      .put<{ object: Utilizador }>(`${this.path}/UpdateUtilizador`, utilizador)
      .pipe(
        map((response) => response.object as Utilizador)
      );
  }

  // Delete existing utilizador
  public delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeleteUtilizadorById/${id}`);
  }
}
