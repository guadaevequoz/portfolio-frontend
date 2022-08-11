export class Habilidad {

    id: number;
    nombre: string;
    porcentaje: number;
    logo: string;
    color: string;

    constructor(id: number, nombre: string, porcentaje: number, logo: string, color: string){
        this.id = id;
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.logo = logo;
        this.color = color;
    }
}
