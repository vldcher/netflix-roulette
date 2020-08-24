import React from "react";
import { Logo } from "../Logo";
import { Search } from "../Search";
import './header.scss';
import { ActionDialog } from "../ActionDialog";
import { AddMovie } from "../MovieActions/AddMovie";
import usePopupStatus from '../hooks/customHook';


export default () => {

    const [isOpened, setOpen] = usePopupStatus();

    return (
        <header className="header">
            <section className="header-wrapper">
                <div className="header-container">
                    <Logo />
                    <button className="button button__secondary button--add-movie"
                        onClick={setOpen}>
                        add movie
                    </button>                    
                    <ActionDialog>
                        <AddMovie />
                    </ActionDialog >
                </div>

                <div className="search-container">
                    <Search />
                </div>
            </section>
        </header>
    );
};