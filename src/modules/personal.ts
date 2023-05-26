import { Serie } from "./serie.js";

export let actores: Actor[] = [];
export let directores: Director[] = [];

abstract class Personal{
    nombre: string
    fotografia: string
    descripcion: string

    constructor(nombre:string, fotografia:string, descripcion:string){
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }

    abstract agregarSerie(serie:Serie):void;
}

export class Actor extends Personal{
    series: Serie[]
    constructor(nombre:string, fotografia:string, descripcion:string, serie?:Serie){
        super(nombre, fotografia, descripcion);
        this.series = [];
        if(serie)this.series.push(serie)
    }

    agregarSerie(serie:Serie): void {
        this.series.push(serie)
    }
}

export class Director extends Personal{
    proyectos: Serie[]
    constructor(nombre:string, fotografia:string, descripcion:string, proyecto?:Serie){
        super(nombre, fotografia, descripcion);
        this.proyectos = [];
        if(proyecto)this.proyectos.push(proyecto)
    }

    agregarSerie(serie: Serie): void {
        this.proyectos.push(serie);
    }
}

export function crearActor(nombre:string, fotografia:string, descripcion:string, serie?:Serie){
    actores.push(new Actor(nombre, fotografia, descripcion, serie));
}

export function crearDirector(nombre:string, fotografia:string, descripcion:string, serie?:Serie){
    directores.push(new Director(nombre, fotografia, descripcion, serie));
}