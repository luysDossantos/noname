import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/providers/http/api.service';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { InstituicaoEnsinoTipoBolsa } from '../models/instituicao-ensino-tipo-bolsa.model';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoEnsinoTipoBolsaService {
  private readonly path = 'instituicaoEnsinoTipoBolsa';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}

  // List all tipos de bolsa
  list(params?: any): Observable<InstituicaoEnsinoTipoBolsa[]> {
    return this.apiService.get<{ data: InstituicaoEnsinoTipoBolsa[] }>(`${this.path}/getAllInstituicaoEnsinoTipoBolsa`, params ? new HttpParams({
      fromObject: params
    }) : this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  // Get tipo de bolsa by ID
  public show(id: string): Observable<InstituicaoEnsinoTipoBolsa> {
    return this.apiService.get<{ object: InstituicaoEnsinoTipoBolsa }>(`${this.path}/getInstituicaoEnsinoTipoBolsaById/${id}`).pipe(
      map(response => response.object as InstituicaoEnsinoTipoBolsa)
    );
  }

  // Create new tipo de bolsa
  public store(tipoBolsa: InstituicaoEnsinoTipoBolsa): Observable<InstituicaoEnsinoTipoBolsa> {
    return this.apiService
      .post<{ object: InstituicaoEnsinoTipoBolsa }>(`${this.path}/AddInstituicaoEnsinoTipoBolsa`, tipoBolsa)
      .pipe(
        map((response) => response.object as InstituicaoEnsinoTipoBolsa)
      );
  }

  // Update existing tipo de bolsa
  public update(tipoBolsa: InstituicaoEnsinoTipoBolsa): Observable<InstituicaoEnsinoTipoBolsa> {
    return this.apiService
      .put<{ object: InstituicaoEnsinoTipoBolsa }>(`${this.path}/UpdateInstituicaoEnsinoTipoBolsa`, tipoBolsa)
      .pipe(
        map((response) => response.object as InstituicaoEnsinoTipoBolsa)
      );
  }

  // Delete existing tipo de bolsa
  public delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeleteInstituicaoEnsinoTipoBolsaById/${id}`);
  }
}
