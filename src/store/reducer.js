import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "src/store/initialState";
import { toggleTheme, setMovies, setLoadingTrue, setLoadingFalse, popupClose, selectMovie } from "src/store/actions";

export const reducer = createReducer(initialState, {
    [toggleTheme]: (state, action) => {
        state.theme = (state.theme === "light") ? "dark" : "light";
    },
    [setLoadingTrue]: (state, actions) => {
        state.loading = true;
    },
    [setLoadingFalse]: (state, actions) => {
        state.loading = false;
    },
    [setMovies]: (state, action) => {
        state.movies = action.payload.results;
        state.total = action.payload.total_pages;
        state.currentPage = action.payload.page;
    },
    [popupClose]: (state, action) => {
        state.selectedMovie = null;
    },
    [selectMovie]: (state, action) => {
        state.selectedMovie = action.payload;
    }
});