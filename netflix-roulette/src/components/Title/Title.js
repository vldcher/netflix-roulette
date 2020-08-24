import React from "react";
import PropTypes from 'prop-types';

import './title.scss';

function Title(props) {
    return (
        <h1 className="title">{props.text}</h1>
    );
};

Title.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Title;