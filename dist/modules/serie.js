export let series = [];
export class Serie {
    constructor(nombre, imagen, categoria, directores, actores, episodio, plataforma) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.directores = directores;
        this.actores = actores;
        this.categorias = this.asignarCategoria(categoria);
        this.episodios = [];
        if (episodio)
            this.episodios.push(episodio);
        this.plataformas = [];
        if (plataforma)
            this.plataformas.push(plataforma);
    }
    asignarCategoria(categoria) {
        let categorias = [];
        if (typeof (categoria) == "string") {
            categorias.push(categoria);
        }
        else {
            categorias = categoria;
        }
        return categorias;
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    agregarDirector(director) {
        this.directores.push(director);
    }
    agregarActor(actor) {
        this.actores.push(actor);
    }
    agregarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
    agregarPlataforma(plataforma) {
        this.plataformas.push(plataforma);
    }
    setImagen(direccion) {
        this.imagen = direccion;
    }
    getImagen() {
        return this.imagen;
    }
}
export function crearSerie(nombre, imagen, categoria, directores, actores, episodio, plataforma) {
    series.push(new Serie(nombre, imagen, categoria, directores, actores, episodio, plataforma));
}
export function mostrarListado() {
    series.forEach(serie => console.log(serie));
}
export function buscarSerie(nombre) {
    return series.find(serie => serie.nombre == nombre);
}
