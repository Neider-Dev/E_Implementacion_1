export type plan = {
    plan: string,
    precio: string
}

export class Plataforma{
    private nombre: string
    private sitio_Web: string
    private planes: plan[]

    constructor(nombre:string, sitio_Web:string, planes:plan[]){
        this.nombre = nombre;
        this.sitio_Web = sitio_Web;
        this.planes = planes;
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
}