export type plan = {
    plan: string,
    precio: string
}

export let  categorias= {
    drama: "Drama",
    romance: "Romance",
    comedia: "Comedia", 
    animacion: "Animación",
    accion: "Acción",
    terror: "Terror", 
    suspenso: "Suspenso"
}

export function crearCategoria(clave:string, valor: string):void{
    Object.defineProperty(categorias, clave, {value: valor, writable: false});
}



