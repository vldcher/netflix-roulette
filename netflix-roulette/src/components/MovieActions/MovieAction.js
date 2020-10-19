import React, { useState } from "react";
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import usePopupStatus from '../hooks/customHook';
import { ActionDialog } from "../ActionDialog";
import { AddMovie } from "../MovieActions/AddMovie";
import { DeleteMovie } from "../MovieActions/DeleteMovie";

import "./movie-actions.scss";

function MovieActions({movieData}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [setOpen, setClose, modalState] = usePopupStatus();
  const [editedMovie, setEditedMovie] = useState(false);

  const handleClick = (event) => {
    setEditedMovie(movieData);
    setAnchorEl(event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const openEditPopup = () => {
    setOpen('edit', { isOpened: true, movieData: movieData });
  };

  const openDeletePopup = () => {
    setOpen('delete', { isOpened: true, movieData: movieData });
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (

    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="movie__action-button">
      </button>

      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <ClickAwayListener onClickAway={handleClickAway}>

          <ul className="actions">
            <li className="actions__option" onClick={openEditPopup}>Edit</li>
            {modalState.modalType === 'edit' &&
              (<ActionDialog>
                <AddMovie editedMovie={editedMovie} />
              </ActionDialog >)}
            <li className="actions__option" onClick={openDeletePopup}>Delete</li>
            {modalState.modalType === 'delete' &&
              (<ActionDialog>
                <DeleteMovie deletedMovie={modalState.modalProps}/>
              </ActionDialog >)}
          </ul>
        </ClickAwayListener>

      </Popper>
    </>
  );
}


export default MovieActions;