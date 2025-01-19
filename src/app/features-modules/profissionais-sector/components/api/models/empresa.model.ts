export interface Bolsa {
    id: string;
    title: string;
    financialCoverage: string;
    type: string;
    coveragePercentage: number | string;
    destination: string;
    academicLevel: string;
    vacancies: number | string;
    estado: string;
    fundingEntity: string;
    startDate: string; // ISO 8601 date string
    endDate: string; // ISO 8601 date string
    sponsor: string;
    status: string;
    description: string;
    tags: string[];
    participants: { photo: string }[];
    duration: any;
    avatar: any;
    tipoEmpresa: any;
    name: any;
  }
  