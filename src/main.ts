import * as Categorias  from "./modules/categorias.js";
import { plan } from "./modules/types.js";
import * as Personal from "./modules/personal.js";
import * as Serie from "./modules/serie.js";
import * as Episodio from "./modules/episodio.js";
import * as Plataformas from "./modules/plataforma.js";


//Object.defineProperty(categorias, 'id', {value: 'a', writable: false});
/**
 * Metodos:
 * 1. Mostrar el listado de todas las series +
 * 2. Mostrar el detalle de una serie en particular +
 * 3. Mostrar el listado de categorias +
 * 4. Mostrar el listado de directores y actores de una serie  +
 * 5. Mostrar el detalle de un director y un actor +
 * 6. Mostrar el listado de las plataformas +
 * 7. Mostrar detalle de una plataforma +
 * 8. Crear una nueva serie +
 * 9. Crear una nueva categoria +
 * 10. Crear un nuevo actor +
 * 11. Crear un nuevo director +
 * 12. Agregar una categoria a una serie +
 * 13. Agregar un actor a una serie +
 * 14. Agregar un director a una serie +
 */


function mostrarSerie(nombre:string): void{
    let serie = Serie.buscarSerie(nombre)
    if(serie){
        console.log(serie)
    }else{
        console.log(`No se encontro la serie ${nombre}`)
    }
}

function mostrarActor(nombre:string): void{
    let actor = Personal.buscarActor(nombre)
    if(actor){
        console.log(actor)
    }else{
        console.log(`No se encontro el actor ${nombre}`)
    }
}

function mostrarDirector(nombre:string):void{
    let director = Personal.buscarDirector(nombre)
    if(director){
        console.log(director)
    }else{
        console.log(`No se encontro el director ${nombre}`)
    }
}

function mostrarPlataforma(nombre:string):void{
    let plataforma = Plataformas.buscarPlataforma(nombre)
    if(plataforma){
        console.log(plataforma)
    }else{
        console.log(`No se encontro el plataforma ${nombre}`)
    }
}

//Crear las categorias
let listadoCategorias:string[] = ["Romance", "Comedia", "Drama", "Suspenso", "Acción", "Animación", "Terror"];
listadoCategorias.forEach(categoria => Categorias.crearCategoria(categoria));

//Crear los actores 
Personal.crearActor("Adam McArthur", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Adam_McArthur_by_Gage_Skidmore.jpg/440px-Adam_McArthur_by_Gage_Skidmore.jpg", "Adam McArthur es un actor y artista marcial estadounidense.2​ Es conocido por ser la voz de Marco Díaz en la caricatura de Disney XD, Star vs. the Forces of Evil. Además ha prestado voces en otras series animadas, y en comerciales de televisión estadounidenses. En el terreno de las artes marciales, se especializa en kung fu, y ha sido campeón en varios torneos, además ha aparecido en varios documentales emitidos por PBS.");

Personal.crearActor("Pedro Pascal", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Pedro_Pascal_by_Gage_Skidmore.jpg/440px-Pedro_Pascal_by_Gage_Skidmore.jpg", "José Pedro Balmaceda Pascal (Santiago de Chile, 2 de abril de 1975), conocido como Pedro Pascal, es un actor de teatro, televisión, cine, voz y director teatral chileno naturalizado estadounidense. Es conocido por interpretar al príncipe Oberyn Martell en la serie de televisión Game of Thrones,1​ a Javier Peña en la serie Narcos, en Netflix; a el Mandaloriano, en la serie The Mandalorian, de Disney+, y luego, por la serie de The Last of Us, de HBO, donde interpreta al protagonista, Joel Miller.")

//Crear directores 
Personal.crearDirector("Dave Wasson", "https://static.wikia.nocookie.net/star-and-the-forces-of-evil/images/e/e5/Dave_Wasson_profile.jpg/revision/latest?cb=20170408064954", "David Jerome Wasson (born September 11, 1968) is an American animator, storyboard artist, director, producer, writer, and voice actor. He graduated from the California Institute of the Arts with a B.F.A. Wasson created the Cartoon Network original series Time Squad,[1] before going on to develop Star vs. the Forces of Evil on which he is also a director, writer, and executive producer, and directing and writing on the series Mickey Mouse Shorts. He was the supervising director of Making Fiends and was the executive producer and director of the series The Buzz on Maggie. He is also the author and illustrator of the children's book The Big Ideas of Buster Bickles. Wasson is currently developer and executive producer of The Cuphead Show! for Netflix.")

Personal.crearDirector("Denis Villeneuve", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Denis_Villeneuve_Cannes_2018.jpg/440px-Denis_Villeneuve_Cannes_2018.jpg", "Denis Villeneuve (Trois-Rivières, Quebec, 3 de octubre de 1967) es un guionista y director de cine canadiense. Fue nominado a un premio Óscar en la categoría de mejor dirección por su película La llegada (2016), y ha ganado tres premios Genie como mejor director por sus largometrajes Maelström (2000), Polytechnique (2009) e Incendies (2010). La película Incendies fue nominada además a un Óscar en la categoría de mejor película de habla no inglesa. Internacionalmente, es conocido por haber dirigido las cintas Prisoners, Sicario, La llegada, Blade Runner 2049 y Dune.")

//Crear serie 

Serie.crearSerie("Star vs. the forces of evil", "https://static.wikia.nocookie.net/doblaje/images/c/c5/STAR_VS_LAS_FUERZAS_DEL_MAL_poster.jpg/revision/latest?cb=20200706220227&path-prefix=es", ["Comedia", "Animación"], [Personal.directores[0]], [Personal.actores[0]])


//Crear plataforma
let plan1:plan = {
    plan: "basico", 
    precio: "5"
}

Plataformas.crarPlataforma("Netflix","https://www.netflix.com/co/", [plan1])
Plataformas.plataformas[0].agregarSeries(Serie.series[0]);

Categorias.listarCategorias();
Personal.listarActores();
Personal.listarDirectores();
mostrarActor("Adam McArthur");
mostrarDirector("Denis Villeneuve")
mostrarDirector("Dave Wasson")
Serie.mostrarListado();