export let categorias = {
    drama: "Drama",
    romance: "Romance",
    comedia: "Comedia",
    animacion: "Animación",
    accion: "Acción",
    terror: "Terror",
    suspenso: "Suspenso"
};
export function crearCategoria(clave, valor) {
    Object.defineProperty(categorias, clave, { value: valor, writable: false });
}
