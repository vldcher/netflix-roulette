import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
  
  const [setOpen, setClose, modalState] = usePopupStatus();

  return (
    <> 
      <Dialog open={modalState.modalProps.isOpened}
        onClose={setClose}
        aria-labelledby="form-dialog-title">
        <CloseDialog onClose={setClose}>
        </CloseDialog>
        {children}
      </Dialog>
    </>
  );
}
