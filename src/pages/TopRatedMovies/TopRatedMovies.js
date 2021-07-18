import React, { useEffect } from "react";
import Movie from "src/components/Movie/Movie";
import PopoUp from "src/components/PopUp/PopUp";
import Pagination from "src/components/Pagination/Pagination";
import { apiUrl, apiKey } from "src/config/config";
import { useDispatch, useSelector } from "react-redux";
import { loadingSelector, moviesSelector, selectedMovieSelector, themeSelector } from "src/store/selectors";
import { fetchMoviesList, popupClose, selectMovie } from "src/store/actions";

const TopRatedMovies = () => {
    const apiEndPoint = `${apiUrl}/3/movie/top_rated?api_key=${apiKey}&language=en-US`;

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
        <div className={`top-rated-movies theme-${theme}`}>
            <header className="site-header">
                <h1 className="site-title">
                    Top Rated Movies
                </h1>
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

export default TopRatedMovies;