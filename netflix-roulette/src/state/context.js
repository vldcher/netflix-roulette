import React, { createContext, useReducer } from 'react';

const initialState = {};
const actions = {
  SET_OPEN: "SET_OPEN",
  SET_CLOSE: "SET_CLOSE"
};


function reducer(state, action) {
  switch (action.type) {
    case actions.SET_OPEN:
      console.log('action ---', action);

      return {
        ...state,
        isOpened: action.value
      };
    default:
      return state;
  }
}
const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    setOpen: (value) => {
      dispatch({
        type: actions.SET_OPEN, value
      });
    },

    isOpened: state.isOpened
  };

  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider }