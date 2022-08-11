export class Educacion {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  institucion: string;
  logo: string;
  promedio: number;
  fechaInicio: Date;
  fechaFin: Date;
  terminado: boolean;

  constructor(
    id: number,
    promedio: number,
    nombre: string,
    descripcion: string,
    tipo: string,
    institucion: string,
    logo: string,
    fecha_inicio: Date,
    fecha_fin: Date,
    terminado: boolean
  ) {
    this.id = id;
    this.promedio = promedio;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.institucion = institucion;
    this.logo = logo;
    this.fechaInicio = fecha_inicio;
    this.fechaFin = fecha_fin;
    this.terminado = terminado;
  }
}
