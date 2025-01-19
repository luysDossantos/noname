import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '@core/providers/http/api.service';
import { TipoBolsa } from '../models/tipo-bolsa.model';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TipoBolsaService {
  private readonly path = 'bolsa';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}

  // List all tipo bolsas
  list(params?: any): Observable<TipoBolsa[]> {
    return this.apiService.get<{ data: TipoBolsa[] }>(`${this.path}/getAllTipoBolsa`, params ? new HttpParams({
      fromObject: params
    }) : this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  // Get tipo bolsa by ID
  public show(id: string): Observable<TipoBolsa> {
    return this.apiService.get<{ object: TipoBolsa }>(`${this.path}/getTipoBolsaById/${id}`).pipe(
      map(response => response.object as TipoBolsa)
    );
  }

  // Create new tipo bolsa
  public store(form: TipoBolsa): Observable<TipoBolsa> {
    const tipoBolsa = form as TipoBolsa;
    return this.apiService
      .post<{ object: TipoBolsa }>(`${this.path}/AddTipoBolsa`, tipoBolsa)
      .pipe(
        map((response) => response.object as TipoBolsa)
      );
  }

  // Update existing tipo bolsa
  public update(form: FormGroup, id: string): Observable<TipoBolsa> {
    const tipoBolsa = form.value as TipoBolsa;
    return this.apiService
      .put<{ object: TipoBolsa }>(`${this.path}/UpdateTipoBolsa/${id}`, tipoBolsa)
      .pipe(
        map((response) => response.object as TipoBolsa)
      );
  }

  // Delete existing tipo bolsa
  delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeleteTipoBolsaById/${id}`);
  }
}
