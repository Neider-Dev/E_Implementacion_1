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
