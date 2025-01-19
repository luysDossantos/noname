/**
 * Concurso.Api
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { HabilitacaoNivel } from './habilitacaoNivel';
import { Habilitacao } from './habilitacao';
import { AreaFormacao } from './areaFormacao';


export interface Curso { 
    id?: number;
    designacao?: string | null;
    areaFormacaoID?: number;
    habilitacaoNivelID?: number;
    areaFormacao?: AreaFormacao;
    habilitacaoNivel?: HabilitacaoNivel;
    habilitacoes?: Array<Habilitacao> | null;
}

