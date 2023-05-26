export class Plataforma {
    constructor(nombre, sitio_Web, planes, serie) {
        this.nombre = nombre;
        this.sitio_Web = sitio_Web;
        this.planes = planes;
        this.series = [];
        if (serie)
            this.series.push(serie);
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
    getSeries() {
        return this.series;
    }
    agregarSeries(serie, series) {
        if (serie) {
            this.series.push(serie);
        }
        else if (series) {
            series.forEach(serier => {
                this.series.push(serier);
            });
        }
    }
}
