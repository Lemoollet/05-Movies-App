import movieDB from '../api/movieDB';
import {useEffect, useState} from 'react';
import {MovieDBMoviesResponse, Movie} from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMovies = () => {
  /*  
    *Se puede hacer un state para almacenar cada peticion 
      const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);
      const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([]);  
  */
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    /*  
      *Se puede crear una constante por cada peticion y su respectivo await  
        const hola = await movieDB.get<MovieDBMoviesResponse>('/now_playing');
        ...
      *Despues nada mas se Setean en sus respectivos estados
        setPeliculasEnCine(respNowPlaying.data.results);
        setPeliculasPopulares(respoPopular.data.results);
    */
    const nowPlayingPromise =
      movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const resp = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });

    setIsLoading(false);
  };

  return {
    //Estamos haciendo una desestructuracion, ya que el state mandado es un objeto
    ...moviesState,
    isLoading,
  };
};

export default useMovies;
