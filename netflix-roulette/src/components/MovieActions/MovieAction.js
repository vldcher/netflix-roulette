import React from "react";
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import usePopupStatus from '../hooks/customHook';
import { ActionDialog } from "../ActionDialog";
import { EditMovie } from "../MovieActions/EditMovie";
import { DeleteMovie } from "../MovieActions/DeleteMovie";

import "./movie-actions.scss";

function MovieActions() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isOpened, setOpen] = usePopupStatus();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickAway = () => {
    console.log('clicked outside')
    setAnchorEl(null);
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
            <li className="actions__option" onClick={setOpen}>Edit</li>
            <ActionDialog>
              <EditMovie />
            </ActionDialog >
            <li className="actions__option">Delete</li>
            {/* <ActionDialog>
              <DeleteMovie />
            </ActionDialog > */}
          </ul>
        </ClickAwayListener>

      </Popper>
    </>
  );
}


export default MovieActions;