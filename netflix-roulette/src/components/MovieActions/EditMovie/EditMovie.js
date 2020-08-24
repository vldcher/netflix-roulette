import React from 'react';
import TextField from '@material-ui/core/TextField';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

import '../AddMovie/add-movie.scss';

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
    margin: '10px 0',
  },
  formControl: {
    minWidth: 120,
    margin: '10px 0',
    width: '100%',
  },
}));

const titleText = 'edit movie';

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
          id="movie-id"
          label="Movie id"
          defaultValue="MO32820TH"
          className={textField}
          InputProps={{
            readOnly: true,
          }}
          variant="filled"
        />

        <TextField
          autoFocus
          defaultValue="Pulp Fiction"
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
          id="movie-url"
          label="movie url"
          type="text"
          className={textField}
          defaultValue="www.moana.com"
        />

        <FormControl className={formControl}>
          <InputLabel id="demo-simple-select-label">Genre</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={genre}
            onChange={handleChange}
          >
            <MenuItem value={10}>Western</MenuItem>
            <MenuItem value={20}>Drama</MenuItem>
            <MenuItem value={30}>Comedy</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="overview"
          label="overview"
          type="text"
          className={textField}
          defaultValue="overview text goes here"
        />

        <TextField
          id="runtime"
          label="runtime"
          type="text"
          className={textField}
          defaultValue="Runtime text goes here"
        />
      </DialogContent>
    </>
  );
}
