import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ITv} from '../../models';
import {tvService} from '../../services';

interface IState {
    tv: ITv[];
    tvShow: ITv | null;
}

const initialState: IState = {
    tv: [],
    tvShow: null
};

const getTv = createAsyncThunk<ITv[], { page: number }>(
    'tvSlice/getTv',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data: {results}} = await tvService.getAll(page);

            return results;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const getTvShowById = createAsyncThunk<ITv, { id: number }>(
    'tvSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await tvService.getById(id);

            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const filterWithTvGenres = createAsyncThunk<ITv[], { page: number, genres: number[] }>(
    'movieSlice/filterWithGenres',
    async ({page, genres}, {rejectWithValue}) => {
        try {
            const {data: {results}} = await tvService.getWithGenres(page, genres.toString());

            return results;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const tvSlice = createSlice({
    name: 'tvSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getTv.fulfilled, (state, action) => {
                state.tv = action.payload;
            })
            .addCase(filterWithTvGenres.fulfilled, (state, action) => {
                state.tv = action.payload.filter(show => show.poster_path !== null);
            })
            .addCase(getTvShowById.fulfilled, (state, action) => {
                state.tvShow = action.payload;
            })
    }
});

const {reducer: tvReducer} = tvSlice;

export {
    tvReducer
};

export {
    getTv,
    filterWithTvGenres,
    getTvShowById
};