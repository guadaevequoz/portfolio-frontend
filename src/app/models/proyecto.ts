export class Proyecto {
    id: number;
    nombre: string;
    descripcion: string;
    enlace: string;

    constructor(id: number, nombre: string, descripcion: string, enlace: string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.enlace = enlace;
    }
}
