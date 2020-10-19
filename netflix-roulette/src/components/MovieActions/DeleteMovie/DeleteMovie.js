import React from 'react';
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";

import DialogContent from '@material-ui/core/DialogContent';
import { deleteMovie, selectSearch } from "../../../store/actions/actionCreators";
import usePopupStatus from '../../hooks/customHook';

import './delete-movie.scss';

import { Title } from '../../Title';

const titleText = 'delete movie';

export default function DeleteMovie({deletedMovie}) {

  const dispatch = useDispatch();
  const [setOpen, setClose, modalState] = usePopupStatus();


  const handleConfirm = () => {
    dispatch(deleteMovie(deletedMovie.movieData));
    dispatch(selectSearch());
    setClose();
  };

  return (
    <>
      <Title text={titleText} />
      <DialogContent className="dialog-content">
        <p>Are you sure you want to delete this movie?</p>
      </DialogContent>
      <Button
          color="secondary"
          variant="contained"
          onClick={handleConfirm}
        >
          Confirm
        </Button>
    </>
  );
}
