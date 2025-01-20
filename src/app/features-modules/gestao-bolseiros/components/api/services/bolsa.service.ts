import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ApiService } from '@core/providers/http/api.service';
import { Bolsa } from '../models/bolsa.model';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BolsaService {
  private readonly path = 'bolsa';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}
  // List all bolsas
  list(params?: any): Observable<Bolsa[]> {
    return this.apiService.get<{ data: Bolsa[] }>(`${this.path}/getAllBolsa`, params ? new HttpParams({
      fromObject: params
    }): this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }
  // Create new bolsa
  public store(form: FormGroup): Observable<Bolsa> {
    const bolsa = form.value as Bolsa;
    return this.apiService
      .post<{ object: Bolsa }>(`${this.path}/AddBolsa`, bolsa)
      .pipe(
        map((response) => response.object as Bolsa)
      );
  }

  // Update existing bolsa
  public update(form: FormGroup, id: string): Observable<Bolsa> {
    const bolsa = form.value as Bolsa;
    return this.apiService
      .put<{ object: Bolsa }>(`${this.path}/UpdateBolsa/${id}`, bolsa)
      .pipe(
        map((response) => response.object as Bolsa)
      );
  }

  // Delete existing bolsa
  delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeleteBolsaById/${id}`);
  }

  // Get bolsa by ID
  public show(id: string): Observable<Bolsa> {
    return this.apiService.get<{ object: Bolsa }>(`${this.path}/getBolsaById/${id}`).pipe(
      map(response => response.object as Bolsa)
    );
  }
}
