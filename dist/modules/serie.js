export class serie {
    constructor(imagen, categoria, directores, actores, episodio, plataforma) {
        this.imagen = imagen;
        this.categoria = categoria;
        this.directores = directores;
        this.actores = actores;
        this.episodios = [];
        if (episodio)
            this.episodios.push(episodio);
        this.plataformas = [];
        if (plataforma)
            this.plataformas.push(plataforma);
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
