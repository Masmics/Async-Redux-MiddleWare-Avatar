import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const chars = characters.map(({ name, url }) => (
    <li key={name}>
      <Character name={name} url={url} />
    </li>
  ));

  return (
    <ul>
      {chars}
    </ul>
  );
}

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
