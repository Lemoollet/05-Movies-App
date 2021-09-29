import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '2dd89571ec1db2818b6aea27695176aa',
    language: 'en-ES',
  },
});

export default movieDB;
