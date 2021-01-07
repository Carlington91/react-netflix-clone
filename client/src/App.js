import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Banner from './components/banner/Banner';
import Row from './components/row/Row';
import request from './helpers/requests';
import './App.css';

const App = () => {
  const {
    fetchNetFlixOriginals,
    fetchTrending,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentariesMovies,
  } = request;

  return (
    <div className='app'>
      <Navbar />
      <Banner />

      <Row
        title='Netflix Originals'
        fetchUrl={fetchNetFlixOriginals}
        isPosterPath
      />
      <Row title='Trending Now' fetchUrl={fetchTrending} />
      <Row title='Top Rated' fetchUrl={fetchTopRated} />
      <Row title='Action Movies' fetchUrl={fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={fetchDocumentariesMovies} />

      <Footer />
    </div>
  );
};

export default App;
