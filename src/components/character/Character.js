import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Characters.css';

function Character({ character }) {
  return (
    <section>
      <Link to={`redux-avatar-promise/${character.id}`}>
        <img src={character.url} style={styles.img} />
        <h3>{character.name}</h3>
      </Link>
    </section>
  );
}

Character.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};

export default Character;
