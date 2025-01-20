export interface Empresa {
    id: string;
    title: string;
    type: string;
    destination: string;
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
