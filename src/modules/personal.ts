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

    abstract agregarSerie(serie:serie):void;
}

export class Actor extends Personal{
    series: serie[]
    constructor(nombre:string, fotografia:string, descripcion:string, serie?:serie){
        super(nombre, fotografia, descripcion);
        this.series = [];
        if(serie)this.series.push(serie)
    }

    agregarSerie(serie:serie): void {
        this.series.push(serie)
    }
}

export class Director extends Personal{
    proyectos: serie[]
    constructor(nombre:string, fotografia:string, descripcion:string, proyecto?:serie){
        super(nombre, fotografia, descripcion);
        this.proyectos = [];
        if(proyecto)this.proyectos.push(proyecto)
    }

    agregarSerie(serie: serie): void {
        this.proyectos.push(serie);
    }
}