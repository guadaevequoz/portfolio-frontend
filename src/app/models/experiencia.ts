export class Experiencia {

    id: number;
    nombre: string;
    descripcion: string;
    institucion: string;
    terminado: boolean;
    competencias: Array<string>;
    tipo: string;
    fechaInicio: Date;
    fechaFin: Date;

    constructor(id: number, nombre: string, descripcion: string, institucion: string, terminado: boolean,
        competencias: Array<string>, tipo: string, fechaInicio: Date, fechaFin: Date){
            this.id = id;
            this.nombre = nombre;
            this.descripcion = descripcion;
            this.institucion = institucion;
            this.terminado = terminado;
            this.competencias = competencias;
            this.tipo = tipo;
            this.fechaInicio = fechaInicio;
            this.fechaFin = fechaFin;
    }
}
