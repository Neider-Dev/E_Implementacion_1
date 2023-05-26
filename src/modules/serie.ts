import { Episodio } from "./episodio.js"
import { Director,Actor } from "./personal.js"
import { Plataforma } from "./plataforma.js"
export class serie{
    private imagen: string
    categoria: string
    directores: Director[]
    actores: Actor[]
    episodios: Episodio[]
    plataformas: Plataforma[]

    constructor(imagen:string, categoria:string, directores:Director[], actores:Actor[], episodio?: Episodio, plataforma?: Plataforma){
        this.imagen = imagen;
        this.categoria = categoria;
        this.directores = directores;
        this.actores = actores;
        this.episodios = [];
        if(episodio)this.episodios.push(episodio);
        this.plataformas = [];
        if(plataforma)this.plataformas.push(plataforma);
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