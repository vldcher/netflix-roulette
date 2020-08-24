import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import DialogActions from '@material-ui/core/DialogActions';
import usePopupStatus from '../hooks/customHook';

import './action-dialog.scss';


const CloseDialog = ((props) => {
  const { onClose } = props;

  return (
    <>
      {onClose && (
        <IconButton aria-label="close" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      )}
    </>
  );
});

export default function ActionDialog({ children }) {
  
  const [isOpened, setOpen] = usePopupStatus();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={isOpened}  // change true to open
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <CloseDialog onClose={handleClose}>
        </CloseDialog>
        {children}
        <DialogActions>
          <button className="button button__secondary"
            onClick={handleClose}>
            Reset
          </button>
          <button className="button button__primary"
            onClick={handleClose}>
            Submit
          </button>
        </DialogActions>
      </Dialog>
    </>
  );
}
