class Personal {
    constructor(nombre, fotografia, descripcion) {
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion = descripcion;
    }
}
export class Actor extends Personal {
    constructor(nombre, fotografia, descripcion, series) {
        super(nombre, fotografia, descripcion);
        this.series = series;
    }
}
export class Director extends Personal {
    constructor(nombre, fotografia, descripcion, series) {
        super(nombre, fotografia, descripcion);
        this.series = series;
    }
}
