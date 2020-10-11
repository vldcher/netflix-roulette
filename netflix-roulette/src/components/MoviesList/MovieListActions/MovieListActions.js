import React from "react";
import { useDispatch } from "react-redux";

import "./movie-list-actions.scss";
import { Sorting } from "../../Sorting";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";

import { filterMovies, setFilterBy } from "../../../store/actions/actionCreators";


export default ({ genres }) => {

    const dispatch = useDispatch();

    const handleClick = (e, filterBy) => {
        dispatch(setFilterBy(filterBy));
        dispatch(filterMovies(filterBy));
    };

    return (
        <section className="nav-wrapper">

            <div className="filter">
                <ToggleButtonGroup
                    value={genres.selected}
                    exclusive
                    onChange={handleClick}
                >
                    {genres.list.map((genre) => (
                        <ToggleButton
                            key={genre.code}
                            value={genre.code}
                        >
                            {genre.title}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>

            <Sorting />
        </section>
    );
};