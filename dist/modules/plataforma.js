export class Plataforma {
    constructor(nombre, sitio_Web, planes) {
        this.nombre = nombre;
        this.sitio_Web = sitio_Web;
        this.planes = planes;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setSitio_Web(sitio_Web) {
        this.sitio_Web = sitio_Web;
    }
    setPlanes(planes) {
        this.planes = planes;
    }
    agregarPlan(plan) {
        this.planes.push(plan);
    }
    getPlanes() {
        return this.planes;
    }
    getNombre() {
        return this.nombre;
    }
    getSitio_Web() {
        return this.sitio_Web;
    }
}
