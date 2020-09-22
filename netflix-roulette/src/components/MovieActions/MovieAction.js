import React from "react";
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import usePopupStatus from '../hooks/customHook';
import { ActionDialog } from "../ActionDialog";
import { EditMovie } from "../MovieActions/EditMovie";
import { DeleteMovie } from "../MovieActions/DeleteMovie";

import "./movie-actions.scss";

function MovieActions(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [setOpen, setClose, modalState] = usePopupStatus();


  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    setAnchorEl(null);
  };

  const openEditPopup = () => {
    setOpen('edit', { isOpened: true, movieData: props.movieData });
  };

  const openDeletePopup = () => {
    setOpen('delete', { isOpened: true, movieData: props.movieData });
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (

    <>
      <button
        aria-describedby={id}
        type="button"
        onClick={handleClick}
        className="actions__button">
      </button>

      <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-end">
        <ClickAwayListener onClickAway={handleClickAway}>

          <ul className="actions">
            <li className="actions__option" onClick={openEditPopup}>Edit</li>
            {modalState.modalType === 'edit' &&
              (<ActionDialog>
                <EditMovie movieInfo={modalState.modalProps} />
              </ActionDialog >)}
            <li className="actions__option" onClick={openDeletePopup}>Delete</li>
            {modalState.modalType === 'delete' &&
              (<ActionDialog>
                <DeleteMovie movieInfo={modalState.modalProps}/>
              </ActionDialog >)}
          </ul>
        </ClickAwayListener>

      </Popper>
    </>
  );
}


export default MovieActions;