export class Contacto {

    id: number;
    nombre: string;
    descripcion: string;
    logo: string;

    constructor(id: number, nombre: string, descripcion: string, logo: string){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.logo = logo;
    }

}
