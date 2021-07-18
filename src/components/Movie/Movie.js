import React from "react";
import RateSwitch from "../RateSwitch/RateSwitch";
import "./Movie.css"
const Movie = ({ movie, openLink }) => {
    const imageUrl = "https://image.tmdb.org/t/p/w500";
    const { title, poster_path, overview, popularity } = movie;

    return (
        <article className="movie">
            <header className="movie-header">
                <img
                    className="poster"
                    onClick={() => openLink(movie)}
                    alt={title}
                    src={imageUrl + poster_path}
                />
            </header>
            <div className="movie-body">
                <h2 className="movie-title">{title}</h2>
                <p className="movie-overview">
                    {overview}
                </p>
                <RateSwitch {...{ popularity }} />
            </div>
        </article>
    )
}

export default Movie;