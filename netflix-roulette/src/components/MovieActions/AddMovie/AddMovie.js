import React from 'react';
import {
  TextField,
  DialogContent, InputLabel, MenuItem, FormControl, Select, makeStyles
} from '@material-ui/core';

import './add-movie.scss';

import { Title } from '../../Title';

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    width: '100%',
    margin: '15px 0',
  },
  formControl: {
    minWidth: 120,
    margin: '15px 0',
    width: '100%',
  },
}));

const titleText = 'add movie';

export default function ActionDialog() {
  const [genre, setGenre] = React.useState('');

  const { textField, formControl } = useStyles();

  const handleChange = (event) => {
    setGenre(event.target.value);
  };

  return (
    <>
      <Title text={titleText} />
      <DialogContent className="dialog-content">
        <TextField
          autoFocus
          margin="dense"
          id="title"
          label="title"
          type="text"
          className={textField}
        />

        <TextField
          id="date"
          label="release date"
          type="date"
          defaultValue="2017-05-24"
          className={textField}
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          margin="dense"
          id="movie-url"
          label="movie url"
          type="text"
          className={textField}
        />

        <FormControl className={formControl}>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            onChange={handleChange}
          >
            <MenuItem value='western'>Western</MenuItem>
            <MenuItem value='drama'>Drama</MenuItem>
            <MenuItem value='comedy'>Comedy</MenuItem>
          </Select>
        </FormControl>

        <TextField
          margin="dense"
          id="overview"
          label="overview"
          type="text"
          className={textField}
        />

        <TextField
          margin="dense"
          id="runtime"
          label="runtime"
          type="text"
          className={textField}
        />
      </DialogContent>
    </>
  );
}
