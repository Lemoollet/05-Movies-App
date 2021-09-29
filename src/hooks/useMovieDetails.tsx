import {useEffect, useState} from 'react';
import {FullMovieDetails} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';

interface MovieDetails {
  cast: any[];
  isLoading: boolean;
  fullMovieDetails: FullMovieDetails;
}

export const useMovieDetails = (movieId: number) => {
  const [mov, setmov] = useState<MovieDetails>();

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const resp = await movieDB.get<FullMovieDetails>(`/${movieId}`);
    console.log(resp.data.overview);
  };

  return {
    mov,
  };
};
