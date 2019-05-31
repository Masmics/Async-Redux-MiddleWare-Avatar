import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import styles from './Characters.css';

function Characters({ characters }) {
  const chars = characters.map(character => (
    <li key={character.id}>
      <Character character={character} />
    </li>
  ));

  return (
    <ul className={styles.Characters}>
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
