import homeImage from '../assets/Korra-Header.jpg';

const get = url => {
  return fetch(url)
    .then(res => ([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw 'Unable to fetch characters';

      return json;
    });
};

export const getCharacters = () => {
  return get('https://last-airbender-api.herokuapp.com/api/v1/characters')
    .then(json => json.map(character => ({
      id: character._id,
      name: character.name,
      url: character.photoUrl || homeImage
    })));
};

export const getCharacter = id => {
  return get(`https://last-airbender-api.herokuapp.com/api/v1/characters/${id}`)
    .then(json => ({
      id: json._id,
      name: json.name,
      url: json.photoUrl,
      position: json.position
    }));
};
