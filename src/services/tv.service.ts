import {AxiosResponse} from 'axios';

import {axiosService} from './axios.service';
import {urls} from '../configs';
import {ITv, ITvData} from '../models';

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;

type Res<T> = Promise<AxiosResponse<T>>

const tvService = {
    getAll: (page: number): Res<ITvData<ITv>> => axiosService.get(`${urls.tv}&page=${page}`),
    getById: (id: number): Res<ITv> => axiosService.get(`${urls.tvSingle}${id}?api_key=${REACT_APP_API_KEY}`),
    search: (query: string): Res<ITvData<ITv>> => axiosService.get(`${urls.tvSearch}&query=${query}`),
    getWithGenres: (page: number, genres: string): Res<ITvData<ITv>> => axiosService.get(`${urls.tv}&page=${page}&with_genres=${genres}`),
};

export {
    tvService
};