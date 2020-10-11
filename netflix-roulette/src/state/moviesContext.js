import React, { useState, createContext } from 'react';

const MoviesContext = createContext();

const MoviesProvider = (props) => {
    const [isMovieDetailsVisible, setMovieDetailsVisible] = useState(false);

    const value = {
        isDetailsVisible: isMovieDetailsVisible,
        updateDetailsVisibility: () => {
            setMovieDetailsVisible(!isMovieDetailsVisible);
        } 
    };
  
    return (
      <MoviesContext.Provider value={value}>
        {props.children}
      </MoviesContext.Provider>
    );
  };
  
  export { MoviesContext, MoviesProvider }