import { serie } from "./serie.js"
export type plan = {
    plan: string,
    precio: string
}

export class Plataforma{
    private nombre: string
    private sitio_Web: string
    private planes: plan[]
    private series: serie[]

    constructor(nombre:string, sitio_Web:string, planes:plan[], serie?:serie){
        this.nombre = nombre;
        this.sitio_Web = sitio_Web;
        this.planes = planes;
        this.series = [];
        if(serie)this.series.push(serie);
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    setSitio_Web(sitio_Web:string){
        this.sitio_Web = sitio_Web;
    }

    setPlanes(planes: plan[]){
        this.planes = planes;
    }

    agregarPlan(plan: plan){
        this.planes.push(plan);
    }

    getPlanes():plan[]{
        return this.planes;
    }

    getNombre():string{
        return this.nombre;
    }

    getSitio_Web():string{
        return this.sitio_Web;
    }

    getSeries(): serie[]{
        return this.series;
    }

    agregarSeries(serie?:serie, series?:serie[]): void{
        if(serie){
            this.series.push(serie);
        }else if(series){
            series.forEach(serier =>{
                this.series.push(serier);
            })
        }
    }
}