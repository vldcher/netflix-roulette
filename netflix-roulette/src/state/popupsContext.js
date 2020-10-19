import React, { createContext, useReducer } from 'react';
import {SHOW_MODAL, HIDE_MODAL} from './actions';

const initialState = {
  modalType: null,
  modalProps: {
    isOpened: false
  },
}

function reducer(state, action) {
  switch (action.type) {

    case SHOW_MODAL:
      return {
          modalType: action.modalType,
          modalProps: action.modalProps
        }

    case HIDE_MODAL:
      return initialState

    default:
      return state;
  }
}
const PopupContext = createContext();

const PopupProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    setOpen: (modalType, modalProps) => {
      dispatch({
        type: SHOW_MODAL,
        modalType,
        modalProps,
      });
    },

    setClose: () => {
      dispatch({
        type: HIDE_MODAL,
      });
    },
    
    modalState: state
  };

  return (
    <PopupContext.Provider value={value}>
      {children}
    </PopupContext.Provider>
  );
};

export { PopupContext, PopupProvider }