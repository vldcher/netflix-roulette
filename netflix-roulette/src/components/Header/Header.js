import React, { useContext } from "react";
import { Link, Route, Switch } from "react-router-dom";
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

    const openAddPopup = () => {
        setOpen('add', { isOpened: true });
    };
    const [setOpen, setClose, modalState] = usePopupStatus();
    const { isDetailsVisible, updateDetailsVisibility } = useContext(MoviesContext);

    return (
        <header className="header">
            <section className="header-wrapper">
                <div className="header-container">
                    <Link to="/" onClick={() => updateDetailsVisibility(true)}>
                        <Logo />
                    </Link>

                    {isDetailsVisible
                        ?
                        <button className="button button__secondary button--add-movie"
                            onClick={openAddPopup}>
                            add movie
                        </button>
                        :
                        <Link to="/" onClick={() => updateDetailsVisibility(true)}>
                            <SearchIcon style={{ position: 'relative', color: '#f65261' }} />
                        </Link>
                    }

                    {modalState.modalType === 'add' &&
                        (<ActionDialog>
                            <AddMovie movieInfo={modalState.modalProps} />
                        </ActionDialog >)
                    }

                </div>
                <Switch>
                    <Route path="/search" exact component={Search} />
                    <Route path="/film/:id" component={MovieDetails} />
                </Switch>
            </section>
        </header>
    );
};