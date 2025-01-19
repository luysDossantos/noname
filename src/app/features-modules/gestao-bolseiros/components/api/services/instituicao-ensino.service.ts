import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/providers/http/api.service';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';

export interface InstituicaoEnsino {
  id: string;
  nome: string;
  endereco: string;
  // Adicione outros campos conforme necessário
}

@Injectable({
  providedIn: 'root'
})
export class InstituicaoEnsinoService {
  private readonly path = 'api/InstituicaoEnsino';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}

  // List all instituicoes de ensino
  list(params?: any): Observable<InstituicaoEnsino[]> {
    return this.apiService.get<{ data: InstituicaoEnsino[] }>(`${this.path}/getAllInstituicaoEnsino`, params ? new HttpParams({
      fromObject: params
    }) : this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  // Get instituicao de ensino by ID
  public show(id: string): Observable<InstituicaoEnsino> {
    return this.apiService.get<{ object: InstituicaoEnsino }>(`${this.path}/getInstituicaoEnsinoById/${id}`).pipe(
      map(response => response.object as InstituicaoEnsino)
    );
  }

  // Create new instituicao de ensino
  public store(instituicaoEnsino: InstituicaoEnsino): Observable<InstituicaoEnsino> {
    return this.apiService
      .post<{ object: InstituicaoEnsino }>(`${this.path}/AddInstituicaoEnsino`, instituicaoEnsino)
      .pipe(
        map((response) => response.object as InstituicaoEnsino)
      );
  }

  // Update existing instituicao de ensino
  public update(instituicaoEnsino: InstituicaoEnsino, id: string): Observable<InstituicaoEnsino> {
    return this.apiService
      .put<{ object: InstituicaoEnsino }>(`${this.path}/UpdateInstituicaoEnsino/${id}`, instituicaoEnsino)
      .pipe(
        map((response) => response.object as InstituicaoEnsino)
      );
  }

  // Toggle status of instituicao de ensino
  public toggleStatus(id: string): Observable<InstituicaoEnsino> {
    return this.apiService
      .patch<{ object: InstituicaoEnsino }>(`${this.path}/ToogleInstituicaoEnsinoStatus/${id}`, {})
      .pipe(
        map((response) => response.object as InstituicaoEnsino)
      );
  }

  // Delete existing instituicao de ensino
  public delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeleteInstituicaoEnsinoById/${id}`);
  }
}
