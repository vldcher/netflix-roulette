import React from "react";
import { TextField, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    textField: {
      width: '100%',
      margin: '15px 0',
    },
  }));

export const InputField = ({
    id,
    title,
    value,
    setData,
    changeKey,
    type,
    ...rest
}) => {

    const { textField } = useStyles();


    return (
        <>
            <label htmlFor={id}>{title}</label>

            <TextField
                id={id}
                label={title}
                value={value}
                type={type}
                className={textField}
                variant="outlined"
                margin="dense"
                fullWidth
                {...rest}
            />
        </>
    );
};