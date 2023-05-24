import { serie } from "./serie.js"
export class Episodio{
    serie: serie
    resumen: string
    duracion: number

    constructor(serie:serie, resumen:string, duracion:number){
        this.serie = serie;
        this.resumen = resumen;
        this.duracion = duracion;
    }
}