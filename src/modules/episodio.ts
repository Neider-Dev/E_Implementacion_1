import { Serie } from "./serie.js"
export class Episodio{
    serie: Serie
    resumen: string
    duracion: number

    constructor(serie:Serie, resumen:string, duracion:number){
        this.serie = serie;
        this.resumen = resumen;
        this.duracion = duracion;
    }
}