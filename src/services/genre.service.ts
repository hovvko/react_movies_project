import {AxiosResponse} from 'axios';

import {axiosService} from './axios.service';
import {urls} from '../configs';
import {IGenre} from '../models';


type Res<T> = Promise<AxiosResponse<T>>;

const genreService = {
    getAll: (): Res<IGenre> => axiosService.get(urls.genres)
};

export {
    genreService
};