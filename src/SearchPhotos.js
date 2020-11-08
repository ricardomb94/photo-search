import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Unsplash, { toJson } from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: 'Cg4mFo-mHl-d8ZADrrdXMq-lCXgi0SejiuZWZ4hQgYM',
});

export default function SearchPhotos() {
  const [query, setQuery] = useState('');
  const [pics, setPics] = useState([]);

  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query, 1, 20)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };

  return (
    <>
      <form className="form" onSubmit={searchPhotos}>
        <label className="label" htmlFor="query">
          {''}
          <FontAwesomeIcon icon={faCameraRetro} size="lg" />
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`try "dog" or "apple"`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          search
        </button>
      </form>
      <div className="card-list">
        {pics.map((pic, i) => (
          <div className="card" key={i}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"></img>
          </div>
        ))}
      </div>
    </>
  );
}

// Access Key:"Cg4mFo-mHl-d8ZADrrdXMq-lCXgi0SejiuZWZ4hQgYM"
// Secret key:"Kf11chVq-6FXU6I8eiFhIZ7DhOvFkcG4yjO7hzmZup4"
