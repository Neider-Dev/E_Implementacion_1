import { serie } from "./serie.js";
abstract class Personal{
    nombre: string
    fotografia: string
    descripcion: string

    constructor(nombre:string, fotografia:string, descripcion:string){
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }
}

export class Actor extends Personal{
    series: serie[]

    constructor(nombre:string, fotografia:string, descripcion:string, series:serie[]){
        super(nombre, fotografia, descripcion);
        this.series = series;
    }
}

export class Director extends Personal{
    series: serie[]

    constructor(nombre:string, fotografia:string, descripcion:string, series:serie[]){
        super(nombre, fotografia, descripcion);
        this.series = series;
    }
}