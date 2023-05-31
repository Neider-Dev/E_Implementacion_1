import * as Categorias from "./modules/categorias.js";
import * as Serie from "./modules/serie.js";
function mostrarSerie(nombre) {
    let serie = Serie.buscarSerie(nombre);
    if (serie) {
        console.log(serie);
    }
    else {
        console.log(`No se encontro la serie ${nombre}`);
    }
}
Categorias.crearCategoria("colegial", "Colegial");
