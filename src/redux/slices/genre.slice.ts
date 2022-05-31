import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {IGenre} from '../../models';
import {genreService} from "../../services";

interface IState {
    genres: IGenre[];
}

const initialState: IState = {
    genres: []
};

const getGenres = createAsyncThunk<IGenre, void>(
    'genreSlice/getGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genreService.getAll();
            return data;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: {}
});

const {reducer: genreReducer} = genreSlice;

export {
    genreReducer
};

export {
    getGenres
}