import {AxiosResponse} from 'axios';

import {axiosService} from './axios.service';
import {urls} from '../configs';
import {IGenre, IGenreData} from '../models';


type Res<T> = Promise<AxiosResponse<T>>;

const genreService = {
    getAll: (): Res<IGenreData<IGenre>> => axiosService.get(urls.genres)
};

export {
    genreService
};