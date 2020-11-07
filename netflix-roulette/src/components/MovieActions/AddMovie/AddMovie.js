import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";

import {
  DialogContent, DialogActions, MenuItem, FormControl, Select, makeStyles, Checkbox, ListItemText, FormHelperText
} from '@material-ui/core';

import './add-movie.scss';

import { addMovie, updateMovie } from "../../../store/actions/actionCreators";
import { Title } from '../../Title';
import { InputField } from '../InputField/InputField';
import usePopupStatus from '../../hooks/customHook';


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


const AddMovie = ({ editedMovie }) => {
  const dispatch = useDispatch();
  const { formControl } = useStyles();
  const [setOpen, setClose, modalState] = usePopupStatus();
  const genres = useSelector((state) => state.genres.list);
  const [form, setFormFieldsData] = useState({
    title: "",
    year: "",
    genres: [],
    description: "",
    runTime: "",
  });

  const titleText = editedMovie ? 'edit movie' : 'add movie';

  useEffect(() => {
    if (editedMovie) {
      setFormFieldsData({
        title: editedMovie.title,
        year: editedMovie.year,
        genres: [...editedMovie.genres],
        description: editedMovie.description,
        runTime: editedMovie.runTime,
      });
    }
  }, [editedMovie]);

  const onReset = () => {
    setFormFieldsData({
      title: "",
      year: "",
      genres: [],
      description: "",
      runTime: "",
    });
    manageForm.resetForm();
    setClose();
  };

  const onSave = (formValues) => {

    const newMovieData = {
      ...formValues,
      genres: [...formValues.genres],
    };

    if (editedMovie) {
      const updatedMovie = {
        ...editedMovie,
        ...newMovieData,
      };
      dispatch(updateMovie(updatedMovie));
    } else {
      newMovieData.photo = {
        title: "No picture found",
      };
      newMovieData.rate = 0;
      dispatch(addMovie(newMovieData));
    }
    onReset();
  };

  const formInputs = [
    {
      id: "title",
      title: "Title",
      placeholder: "Title here",
      value: form.title,
      inputProps: null,
    },
    {
      id: "year",
      title: "Release Date",
      placeholder: "Select Date",
      type: "date",
      inputProps: null,
      value: form.year,
    },
    {
      id: "description",
      title: "Overview",
      placeholder: "Overview here",
      value: form.description,
      inputProps: null,
    },
    {
      id: "runTime",
      title: "Runtime",
      placeholder: "Runtime here",
      value: form.runTime,
      inputProps: null,
    },
  ];


  const manageForm = useFormik({
    initialValues: form,
    validate: ({ title, year, description, genres, runTime }) => {
      const errors = {};
      if (!title) {
        errors.title = "Please write some title";
      }
      if (!year) {
        errors.year = "Please choose release date";
      }
      if (!description) {
        errors.description = "Please write some description";
      }
      if (!runTime) {
        errors.runTime = "Please write runtime";
      }
      if (!genres.length) {
        errors.genres = "Please choose genre(s)";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(false);
      onSave(values);
    },
  });

  return (
    <>
      <Title text={titleText} />
      <DialogContent className="dialog-content">
        <form
          autoComplete="off"
          noValidate
          onSubmit={manageForm.handleSubmit}
          data-test="add-movie"
        >
          {formInputs.map((input, i) => {
            return (
              <InputField
                key={"formInput" + i}
                changeKey={"formInput" + i}
                id={input.id}
                title={input.title}
                type={input.type}
                placeholder={input.placeholder}
                value={manageForm.values[input.id]}
                InputProps={input.inputProps}
                error={!!manageForm.errors[input.id]}
                helperText={manageForm.errors[input.id]}
                onChange={manageForm.handleChange}
                onBlur={manageForm.handleBlur}
              />
            );
          })}

          <FormControl className={formControl}
            error={!!manageForm.errors.genres}>
            <label htmlFor="manage-genres">Genres</label>
            <Select
              value={manageForm.values.genres}
              onChange={manageForm.handleChange}
              onBlur={manageForm.handleBlur}
              name="genres"
              id="manage-genres"
              multiple
              displayEmpty
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return (
                    <span style={{ color: "rgb(147 147 147)" }}>
                      Select Genre
                    </span>
                  );
                }
                return selected
                  .map(
                    (value) => genres.find(({ code }) => value === code).title
                  )
                  .join(", ");
              }}
            >
              {genres.map((genre) => (
                <MenuItem key={genre.code} value={genre.code}>
                  <Checkbox
                    checked={manageForm.values.genres.indexOf(genre.code) > -1}
                  />
                  <ListItemText
                    primary={genre.title}
                  />
                </MenuItem>
              ))}
            </Select>
            <FormHelperText>{manageForm.errors.genres}</FormHelperText>
          </FormControl>
          <DialogActions data-test="action-buttons">
            <button className="button button__secondary"
              type="reset"
              onClick={onReset}>
              Cancel
          </button>
            <button className="button button__primary"
              type="submit">
              Save
          </button>
          </DialogActions>
        </form>
      </DialogContent>

    </>
  );
}

export default AddMovie;