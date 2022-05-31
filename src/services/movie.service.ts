import {axiosService} from './axios.service';
import {AxiosResponse} from 'axios';

import {urls} from '../configs';
import {IMovie, IMovieData,} from '../models';

type Res<T> = Promise<AxiosResponse<T>>

const moviesService = {
    getAll: (page: number): Res<IMovieData<IMovie>> => axiosService.get(`${urls.movies}&page=${page}`)
};

export {
    moviesService
};