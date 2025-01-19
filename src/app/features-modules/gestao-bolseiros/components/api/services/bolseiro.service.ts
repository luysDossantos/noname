import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '@core/providers/http/api.service';
import { Bolseiro } from '../models/bolseiro.model';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BolseiroService {
  private readonly path = 'bolsa';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}

  // List all bolseiros
  list(params?: any): Observable<Bolseiro[]> {
    return this.apiService.get<{ data: Bolseiro[] }>(`${this.path}/getAllBolseiro`, params ? new HttpParams({
      fromObject: params
    }) : this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  // Get bolseiro by ID
  public show(id: string): Observable<Bolseiro> {
    return this.apiService.get<{ object: Bolseiro }>(`${this.path}/getBolseiroById/${id}`).pipe(
      map(response => response.object as Bolseiro)
    );
  }

  // Create new bolseiro
  public store(form: FormGroup): Observable<Bolseiro> {
    const bolseiro = form.value as Bolseiro;
    return this.apiService
      .post<{ object: Bolseiro }>(`${this.path}/AddBolseiro`, bolseiro)
      .pipe(
        map((response) => response.object as Bolseiro)
      );
  }

  // Update existing bolseiro
  public update(form: FormGroup, id: string): Observable<Bolseiro> {
    const bolseiro = form.value as Bolseiro;
    return this.apiService
      .put<{ object: Bolseiro }>(`${this.path}/UpdateBolseiro/${id}`, bolseiro)
      .pipe(
        map((response) => response.object as Bolseiro)
      );
  }

  // Delete existing bolseiro
  delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeleteBolseiroById/${id}`);
  }
}
