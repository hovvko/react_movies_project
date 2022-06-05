import {AxiosResponse} from 'axios';

import {ITv, ITvGenreData} from '../models';
import {axiosService} from './axios.service';
import {urls} from '../configs';

type Res<T> = Promise<AxiosResponse<T>>;

const tvGenreService = {
    getAll: (): Res<ITvGenreData<ITv>> => axiosService.get(urls.tvGenres)
};

export {
    tvGenreService
};