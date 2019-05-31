import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Character({ id, name, url }) {
  return (
    <Link to={`/${id}`}>
      <img src={url} />
      <h3>{name}</h3>
    </Link>
  );
}

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Character;
