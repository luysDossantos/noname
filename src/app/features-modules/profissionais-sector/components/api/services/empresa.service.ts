import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@core/providers/http';
import { debounceTime, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private readonly path: 'empresa';
  public param = new HttpParams

  constructor(private apiService: ApiService) {
    //List all empresas
    list(params?: any): Observable<Empresa[empresa]>{
      return this.apiServive.get<{data: Empresa[]}>(`${this.path}/getAllEmpresa`params ? new HttpParams({
        fromObject: params
      }): this.params).pipe(
        debounceTime(500),
        map(response => response.data)
      )
    }
  }
}
