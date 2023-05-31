import { Episodio } from "./episodio.js"
import { Director,Actor } from "./personal.js"
import { Plataforma } from "./plataforma.js"

export let series: Serie[] = [];

export class Serie{
    nombre: string
    private imagen: string
    categorias: string[]
    directores: Director[]
    actores: Actor[]
    episodios: Episodio[]
    plataformas: Plataforma[]

    constructor(nombre:string, imagen:string, categoria:string | string[], directores:Director[], actores:Actor[], episodio?: Episodio, plataforma?: Plataforma){
        this.nombre = nombre;
        this.imagen = imagen;
        this.directores = directores;
        this.actores = actores;
        this.categorias = this.asignarCategoria(categoria);
        this.episodios = [];
        if(episodio)this.episodios.push(episodio);
        this.plataformas = [];
        if(plataforma)this.plataformas.push(plataforma);
    }

    private asignarCategoria(categoria:string | string[]): string[]{
        let categorias: string[] = []
        if(typeof(categoria) == "string"){
            categorias.push(categoria)
        }else{
            categorias = categoria
        }
        return categorias;
    }

    agregarCategoria(categoria:string){
        this.categorias.push(categoria);
    }

    agregarDirector(director:Director):void{
        this.directores.push(director);
    }

    agregarActor(actor:Actor):void{
        this.actores.push(actor);
    }

    agregarEpisodio(episodio:Episodio):void{
        this.episodios.push(episodio);
    }

    agregarPlataforma(plataforma: Plataforma): void{
        this.plataformas.push(plataforma);
    }

    setImagen(direccion:string){
        this.imagen = direccion;
    }

    getImagen(): string{
        return this.imagen;
    }

}

export function crearSerie(nombre:string ,imagen:string, categoria:string|string[], directores:Director[],actores:Actor[], episodio?:Episodio, plataforma?:Plataforma): void{
    series.push(new Serie(nombre ,imagen, categoria, directores, actores, episodio, plataforma));
}

export function mostrarListado():void{
    series.forEach(serie => console.log(serie))
}

export function buscarSerie(nombre:string): Serie | undefined{
    return series.find(serie => serie.nombre == nombre)
}