import { useEffect, useState } from 'react';
import './App.css';
import Pelicula from './pelicula';
import peliculasJson from './peliculas.json';
import PageWrapper from './PageWrapper';
import Paginacion from './Paginacion';

function ListadoPeliculas() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculas] = useState([]);
  const TOTAL_POR_PAGINA = 7;

  useEffect(() => {
    buscarPeliculas();
  }, []);

  const buscarPeliculas = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';

    let respuesta = await fetch(url, {
      "method": "GET",
      "mode": "no-cors",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    
    setPeliculas(peliculasJson);
  }

  const getTotalPaginas = () => {
    let cantidadTotalPeliculas = peliculas.length;
    return Math.ceil(cantidadTotalPeliculas / TOTAL_POR_PAGINA);
  }

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );

  return (    
    <PageWrapper>
      

      {peliculasPorPagina.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion} director={pelicula.director}
          actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion} img={pelicula.img}>
          Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...
        </Pelicula>
      )}


      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {setPaginaActual(pagina); }} />

    </PageWrapper>

  );
}

export default ListadoPeliculas;