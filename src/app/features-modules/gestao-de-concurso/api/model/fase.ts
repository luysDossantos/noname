/**
 * Concurso.Api
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { ConcursoCategoriaFase } from './concursoCategoriaFase';


export interface Fase { 
    id?: number;
    designacao?: string | null;
    descricao?: string | null;
    concursoCategoriaFases?: Array<ConcursoCategoriaFase> | null;
}

