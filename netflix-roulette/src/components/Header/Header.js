import React from "react";
import { Logo } from "../Logo";
import { Search } from "../Search";
import './header.scss';
import '../../shared/buttons.scss';

export default () => {
    return (
        <header className="header">
            <section className="header-wrapper">
                <div className="header-container">
                    <Logo />
                    <button className="button button__secondary button--add-movie">
                        add movie
                    </button>
                </div>

                <div className="search-container">
                    <Search />
                </div>
            </section>
        </header>
    );
};