import React, { useState, createContext } from 'react';

const MoviesContext = createContext();

const MoviesProvider = (props) => {
    const [isMovieDetailsVisible, setMovieDetailsVisible] = useState(false);

    const value = {
        isDetailsVisible: isMovieDetailsVisible,
        updateDetailsVisibility: () => {
            console.log('hello');
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