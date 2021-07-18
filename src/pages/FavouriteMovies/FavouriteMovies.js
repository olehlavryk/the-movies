import React, { useEffect } from "react";
import Movie from "src/components/Movie/Movie";
import Pagination from "src/components/Pagination/Pagination";
import PopoUp from "src/components/PopUp/PopUp";
import { apiUrl, apiKey } from "src/config/config";
import { useDispatch, useSelector } from "react-redux";
import { popupClose, selectMovie, fetchMoviesList } from "src/store/actions";
import { themeSelector, moviesSelector, loadingSelector, selectedMovieSelector } from "src/store/selectors";

const FavouriteMovies = () => {
    const apiEndPoint = `${apiUrl}/3/movie/popular?api_key=${apiKey}&language=en-US`;

    const dispatch = useDispatch();
    const theme = useSelector(themeSelector);
    const movies = useSelector(moviesSelector);
    const loading = useSelector(loadingSelector);
    const selectedMovie = useSelector(selectedMovieSelector);

    useEffect(() => {
        dispatch(fetchMoviesList(`${apiEndPoint}&page=1`));
    }, []);

    const handleGetMoviesByPage = async (url) => {
        dispatch(fetchMoviesList(url));
    }

    const handlePopupClose = () => {
        dispatch(popupClose());
    }

    const handleSelectedMovie = (selectedMovie) => {
        dispatch(selectMovie(selectedMovie))
    }

    if (loading) {
        return (
            <div className={`loader-wrapper theme-${theme}`}>
                <div className="loader" />
            </div>
        );
    }

    return (
        <div className={`favorite-movies theme-${theme}`}>
            <header className="site-header">
                <h1 className="site-title">Favourite Movies</h1>
            </header>

            <main className="movies">
                {
                    movies.map((movie) => {
                        return (
                            <Movie
                                key={movie.id}
                                {... { movie }}
                                openLink={handleSelectedMovie}
                            />
                        )
                    })
                }
            </main>

            <Pagination
                loadHandler={handleGetMoviesByPage}
                url={apiEndPoint}
            />

            {
                selectedMovie && (
                    <PopoUp
                        releaseDate={selectedMovie.release_date}
                        closePopup={handlePopupClose}
                    />
                )
            }
        </div>
    )
}

export default FavouriteMovies;