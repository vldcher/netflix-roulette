import React, { useContext } from "react";
import { Logo } from "../Logo";
import { Search } from "../Search";
import './header.scss';
import { ActionDialog } from "../ActionDialog";
import { AddMovie } from "../MovieActions/AddMovie";
import MovieDetails from "../MovieDetails";
import { MoviesContext } from "../../state/moviesContext";
import SearchIcon from '@material-ui/icons/Search';


import usePopupStatus from '../hooks/customHook';

export default () => {

    const movie = {
        id: 1,
        title: "Pulp Fiction",
        genre: "Action & Adventures",
        year: 2003,
        img: "",
        duration: 154,
        rating: 4.3,
        description: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles.'
    }

    const openAddPopup = () => {
        setOpen('add', { isOpened: true });
    };

    const [setOpen, setClose, modalState] = usePopupStatus();

    const { isDetailsVisible, updateDetailsVisibility } = useContext(MoviesContext);


    return (
        <header className="header">
            <section className="header-wrapper">
                <div className="header-container">
                    <Logo />

                    {isDetailsVisible
                        ?
                        <SearchIcon style={{ position: 'relative', color: '#f65261' }} 
                            onClick={updateDetailsVisibility}/>
                        :
                        <button className="button button__secondary button--add-movie"
                            onClick={openAddPopup}>
                            add movie
                        </button>
                    }
                    {modalState.modalType === 'add' &&
                        (<ActionDialog>
                            <AddMovie movieInfo={modalState.modalProps} />
                        </ActionDialog >)}

                </div>
                {isDetailsVisible
                    ?
                    <div className="movie-details">
                        <MovieDetails movie={movie} />
                    </div>
                    :
                    <div className="search-container">
                        <Search />
                    </div>
                }
            </section>
        </header>
    );
};