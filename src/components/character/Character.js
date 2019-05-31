import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <section>
      <img src={character.url} />
      <h3>{character.name}</h3>
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
