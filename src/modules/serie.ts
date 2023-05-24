import { Episodio } from "./episodio.js"
import { Director,Actor } from "./personal.js"
export class serie{
    imagen: string
    categoria: string
    directores: Director[]
    actores: Actor[]

    constructor(imagen:string, categoria:string, directores:Director[], actores:Actor[]){
        this.imagen = imagen;
        this.categoria = categoria;
        this.directores = directores;
        this.actores = actores;
    }
}