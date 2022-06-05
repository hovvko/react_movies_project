import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ITv} from '../../models';
import {tvService} from '../../services';

interface IState {
    tv: ITv[];
}

const initialState: IState = {
    tv: []
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
    }
});

const {reducer: tvReducer} = tvSlice;

export {
    tvReducer
};

export {
    getTv,
    filterWithTvGenres
};