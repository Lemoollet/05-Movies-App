import {useEffect, useState} from 'react';
import {FullMovieDetails} from '../interfaces/movieInterface';
import movieDB from '../api/movieDB';
import {CreditsResponse, Cast} from '../interfaces/creditsInterface';

interface MovieDetails {
  isLoading: boolean;
  fullMovieDetails?: FullMovieDetails;
  cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: true,
    fullMovieDetails: undefined,
    cast: [],
  });

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<FullMovieDetails>(`/${movieId}`);
    const castMoviePromise = movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );
    const [moviewDetailsResp, castPromiseResp] = await Promise.all([
      movieDetailsPromise,
      castMoviePromise,
    ]);

    setMovieDetails({
      isLoading: false,
      fullMovieDetails: moviewDetailsResp.data,
      cast: castPromiseResp.data.cast,
    });
  };

  return {
    ...movieDetails,
  };
};
