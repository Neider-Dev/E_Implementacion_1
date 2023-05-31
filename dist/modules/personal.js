export let actores = [];
export let directores = [];
class Personal {
    constructor(nombre, fotografia, descripcion) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }
}
export class Actor extends Personal {
    constructor(nombre, fotografia, descripcion, serie) {
        super(nombre, fotografia, descripcion);
        this.series = [];
        if (serie)
            this.series.push(serie);
    }
    agregarSerie(serie) {
        this.series.push(serie);
    }
}
export class Director extends Personal {
    constructor(nombre, fotografia, descripcion, proyecto) {
        super(nombre, fotografia, descripcion);
        this.proyectos = [];
        if (proyecto)
            this.proyectos.push(proyecto);
    }
    agregarSerie(serie) {
        this.proyectos.push(serie);
    }
}
export function crearActor(nombre, fotografia, descripcion, serie) {
    actores.push(new Actor(nombre, fotografia, descripcion, serie));
}
export function crearDirector(nombre, fotografia, descripcion, serie) {
    directores.push(new Director(nombre, fotografia, descripcion, serie));
}
export function listarActores() {
    actores.forEach(actor => console.log(actor.nombre));
}
export function listarDirectores() {
    directores.forEach(director => console.log(director.nombre));
}
export function buscarActor(nombre) {
    return actores.find(actor => actor.nombre === nombre);
}
export function buscarDirector(nombre) {
    return directores.find(director => director.nombre === nombre);
}
