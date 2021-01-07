import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Row.css';

const Rows = ({ title, fetchUrl, isPosterPath }) => {
  const [movies, setMovies] = useState([]);
  const [trailerId, setTrailerId] = useState('');
  const [isOpen, setIsOpen] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/movies', { url: fetchUrl });
      setMovies(res.data);
    };

    fetchData();
  }, [fetchUrl]);

  console.log(isOpen);

  const handleClick = (movie) => async () => {
    if (trailerId && isOpen === movie.id) {
      setTrailerId('');
    } else {
      try {
        const url = `/${movie.media_type === 'movie' ? 'movie' : 'tv'}/${
          movie.id
        }/videos`;
        const res = await axios.post('/movies/trailer', { url });
        console.log(res.data);
        if (res.data) {
          setTrailerId(res?.data[0]?.key);
          setIsOpen(movie.id);
        }
      } catch (error) {
        console.log(error.response.data.error);
      }
    }
  };

  return (
    <div className='row'>
      <div className='container'>
        <h2>{title}</h2>
        {trailerId && isOpen && (
          <iframe
            title='player'
            width='100%'
            height='315'
            src={`https://www.youtube.com/embed/${trailerId}?autoPlay,controls=0,frameborder=0,allowfullscreen`}
          />
        )}
        <div className='row__posters'>
          {movies.map((movie) => {
            const { id, poster_path, backdrop_path, name } = movie;
            return (
              <img
                src={
                  isPosterPath
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : `https://image.tmdb.org/t/p/w300${backdrop_path}`
                }
                alt={name}
                className={`row__poster ${
                  isPosterPath && 'row__poster__large'
                }`}
                key={id}
                onClick={handleClick(movie)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Rows;
