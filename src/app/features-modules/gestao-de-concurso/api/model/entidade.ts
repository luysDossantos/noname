/**
 * Concurso.Api
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EntidadeConcurso } from './entidadeConcurso';


export interface Entidade { 
    id?: number;
    nome?: string | null;
    email?: string | null;
    telefone?: string | null;
    concursos?: Array<EntidadeConcurso> | null;
}

