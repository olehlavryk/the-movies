import { createAction } from "@reduxjs/toolkit";
import Api from "src/api/Api";

export const toggleTheme = createAction("theme/toggleTheme");
export const setMovies = createAction("movies/setMovies");
export const setLoadingTrue = createAction("loading/true");
export const setLoadingFalse = createAction("loading/false");
export const popupClose = createAction("popup/close");
export const selectMovie = createAction("movie/selectMovie");

export const fetchMoviesList = (payload) => async (dispatch) => {
    dispatch(setLoadingTrue());
    const responce = await Api.fetchMovies(payload);
    dispatch(setMovies(responce));
    dispatch(setLoadingFalse());
}