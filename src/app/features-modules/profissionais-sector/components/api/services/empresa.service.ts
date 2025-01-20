import { FormGroup } from '@angular/forms';
import { HttpParams } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { ApiService } from '@core/providers/http';
import { Empresa } from '../models/empresa.model';
import { debounceTime, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
 /* private readonly path: 'empresa';
  public param = new HttpParams()

  constructor(private apiService: ApiService) {}

   //List all empresas
   list(params?: any): Observable<Empresa[]>{
    return this.apiService.get<{ data: Empresa[] }>(`${this.path}/getAllEmpresa`, params ? new HttpParams({
      fromObject: params
    }): this.params).pipe(
      debounceTime(500),
      map(response => response.data)
    );
  }

  // Create new empresa
  public store(form: FormGroup): Observable<Empresa> {
    const empresa = form.value as Empresa;
    return this.apiService.post<{ object: Empresa }>(`${this.path}/AddEmpresa`, empresa).pipe(map((response) => response.object as Empresa));
  }

  // Update existing empresas
  public update(form: FormGroup, id: string): Observable<Empresa>{
    const empresa = form.value as Empresa;
    return this.apiService.put<{ object: Empresa}>(`${this.path}/UpdateEmpresa/${id}`, empresa).pipe(map((response) => response.object as Empresa));
  }

  // Delete existing empresa
  delete(id: string): Observable: <any> {
    return this.apiService.delete(`${this.path}/DeleteEmpresaById/${id}`);
  }

  // Get empresa by ID
  public show(id: string): Observable: <Empresa> {
    return this.apiService.get<{ object: Empresa }>(`${this.path}/getEmpresaById/${id}`).pipe(map(response => response.object as Empresa))
  }*/

}
