
let url = '';

function eventoBtn(){
  const searchText = document.getElementById('searchText');

  url = `https://api.themoviedb.org/3/search/movie?api_key=e1893cae7ae7ef1f05a06f5c9cd785d5&language=es-MX&query=${searchText.value}&page=1&include_adult=false`;

  cargarPeliculas();
}

const cargarPeliculas = async() => {
  
  try {

    const respuesta = await fetch(url);
    
    if(respuesta.status === 200){
      const datos = await respuesta.json();
      
      let peliculas = '';
      datos.results.forEach(pelicula => {
        
        peliculas += `
          <div class="pelicula">
          <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
          <h3 class="titulo">${pelicula.title}</h3>
          </div>
        `;
        document.getElementById('contenedor').innerHTML = peliculas;
      });

    } else if(respuesta.status === 404){
      console.log('La pelicula que buscas no existe')
    }
   
  } catch (error) {
    console.log(error);
  }
  
}
