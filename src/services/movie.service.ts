import {AxiosResponse} from 'axios';

import {urls} from '../configs';
import {IMovie, IMovieData,} from '../models';
import {axiosService} from './axios.service';


const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

type Res<T> = Promise<AxiosResponse<T>>

const moviesService = {
    getAll: (page: number): Res<IMovieData<IMovie>> => axiosService.get(`${urls.movies}&page=${page}`),
    getWithGenres: (page: number, genres: string): Res<IMovieData<IMovie>> => axiosService.get(`${urls.movies}&page=${page}&with_genres=${genres}`),
    getByID: (id: number): Res<IMovie> => axiosService.get(`${urls.movie}${id}?api_key=${REACT_APP_API_KEY}`),
    search: (query: string): Res<IMovieData<IMovie>> => axiosService.get(`${urls.search}&query=${query}`),
    getTrending: (): Res<IMovieData<IMovie>> => axiosService.get(urls.trending)
};

export {
    moviesService
};