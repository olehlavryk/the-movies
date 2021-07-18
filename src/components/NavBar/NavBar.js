import React from "react";
import { Link } from "react-router-dom";
import ThemeButton from "../ThemeButton/ThemeButton";
import "./NavBar.css";

export const NavBar = () => {
    return (
        <div className="nav-bar">

            <ul className="nav-list">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/top-rated">Top Rated</Link>
                </li>
                <li>
                    <Link to="/tv-shows">TVShows</Link>
                </li>
            </ul>
            <ThemeButton />
        </div>

    )
}