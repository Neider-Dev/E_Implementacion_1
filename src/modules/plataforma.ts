import { Serie } from "./serie.js"
import { plan } from "./types.js"

export let plataformas: Plataforma[] = [];

export class Plataforma{
    private nombre: string
    private sitio_Web: string
    private planes: plan[]
    private series: Serie[]

    constructor(nombre:string, sitio_Web:string, planes:plan[], serie?:Serie){
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

    getSeries(): Serie[]{
        return this.series;
    }

    agregarSeries(serie?:Serie, series?:Serie[]): void{
        if(serie){
            this.series.push(serie);
        }else if(series){
            series.forEach(serier =>{
                this.series.push(serier);
            })
        }
    }
}

export function crarPlataforma(nombre:string, sitio_Web:string, planes:plan[], serie?:Serie){
    plataformas.push(new Plataforma(nombre, sitio_Web, planes, serie));
}

export function listarPlataformas():void{
    plataformas.forEach(plataforma => console.log(plataforma.getNombre()));
}

export function buscarPlataforma(nombre:string): Plataforma | undefined{
    return plataformas.find(Plataforma => Plataforma.getNombre() === nombre);
}