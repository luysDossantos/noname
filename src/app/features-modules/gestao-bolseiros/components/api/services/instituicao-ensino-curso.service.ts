import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/providers/http/api.service';
import { Observable } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { InstituicaoEnsinoCurso } from '../models/instituicao-ensino-curso.model';

@Injectable({
  providedIn: 'root'
})
export class InstituicaoEnsinoCursoService {
  private readonly path = 'instituicaoEnsinoCurso';
  public params = new HttpParams();

  constructor(private apiService: ApiService) {}

  // List all cursos
  list(params?: any): Observable<InstituicaoEnsinoCurso[]> {
    return this.apiService.get<{ data: InstituicaoEnsinoCurso[] }>(`${this.path}/getAllInstituicaoEnsinoCurso`, params ? new HttpParams({
      fromObject: params
    }) : this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  // Get curso by ID
  public show(id: string): Observable<InstituicaoEnsinoCurso> {
    return this.apiService.get<{ object: InstituicaoEnsinoCurso }>(`${this.path}/getInstituicaoEnsinoCursoById/${id}`).pipe(
      map(response => response.object as InstituicaoEnsinoCurso)
    );
  }

  // Create new curso
  public store(curso: InstituicaoEnsinoCurso): Observable<InstituicaoEnsinoCurso> {
    return this.apiService
      .post<{ object: InstituicaoEnsinoCurso }>(`${this.path}/AddInstituicaoEnsinoCurso`, curso)
      .pipe(
        map((response) => response.object as InstituicaoEnsinoCurso)
      );
  }

  // Update existing curso
  public update(curso: InstituicaoEnsinoCurso): Observable<InstituicaoEnsinoCurso> {
    return this.apiService
      .put<{ object: InstituicaoEnsinoCurso }>(`${this.path}/UpdateInstituicaoEnsinoCurso`, curso)
      .pipe(
        map((response) => response.object as InstituicaoEnsinoCurso)
      );
  }

  // Delete existing curso
  public delete(id: string): Observable<any> {
    return this.apiService.delete(`${this.path}/DeleteInstituicaoEnsinoCursoById/${id}`);
  }
}
