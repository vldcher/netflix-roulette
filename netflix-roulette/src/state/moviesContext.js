import React, { useState, createContext } from 'react';

const MoviesContext = createContext();

const MoviesProvider = (props) => {
  const [isMovieDetailsVisible, setMovieDetailsVisible] = useState(true);

  const value = {
    isDetailsVisible: isMovieDetailsVisible,
    updateDetailsVisibility(state) {
      setMovieDetailsVisible(state);
    }
  };

  return (
    <MoviesContext.Provider value={value}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export { MoviesContext, MoviesProvider }