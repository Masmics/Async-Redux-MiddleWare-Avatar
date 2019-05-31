import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ name, url }) {
  return (
    <Link to={`/${name}`}>
      <img src={url} />
      <h3>{name}</h3>
    </Link>
  );
}

Character.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Character;
