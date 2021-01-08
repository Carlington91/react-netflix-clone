import axios from 'axios';
import React, { useState, useEffect } from 'react';
import request from '../../helpers/requests';
import './Banner.css';

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.post('/api/v1/movies/banner', {
        url: request.fetchNetFlixOriginals,
      });
      let random = Math.floor(Math.random() * res.data.length - 1);
      setMovie(res.data[random]);
    };
    fetchData();
    return () => fetchData();
  }, []);

  const bannerStyle = {
    backgroundImage:
      'url(https://image.tmdb.org/t/p/original/' + movie?.backdrop_path + ')',
  };

  return (
    <div className='banner' style={bannerStyle}>
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.name || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
          <h2 className='banner__description'>
            {movie?.overview?.slice(0, 150).concat('...')}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
