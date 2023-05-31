export let  categorias: String[] = []

export function crearCategoria(categoria :string):void{
    categorias.push(categoria);
}

export function listarCategorias(): void{
    categorias.forEach(categoria => console.log(categoria));
}



