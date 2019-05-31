import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Characters({ characters }) {
  const chars = characters.map(({ id, name, url }) => (
    <li key={id}>
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
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
