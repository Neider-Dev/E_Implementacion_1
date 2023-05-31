export let categorias = [];
export function crearCategoria(categoria) {
    categorias.push(categoria);
}
export function listarCategorias() {
    categorias.forEach(categoria => console.log(categoria));
}
