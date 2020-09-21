import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';

import './delete-movie.scss';

import { Title } from '../../Title';

const titleText = 'delete movie';

export default function ActionDialog() {

  return (
    <>
      <Title text={titleText} />
      <DialogContent className="dialog-content">
        <p>Are you sure you want to delete this movie?</p>
      </DialogContent>
    </>
  );
}
