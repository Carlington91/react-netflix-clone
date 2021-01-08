const axios = require('axios');

const fetchExternalData = async (endpoint) => {
  const url = `https://api.themoviedb.org/3${endpoint}`;
  const res = await axios.get(url);
  return res.data.results;
};

exports.movies = async (req, res) => {
  try {
    const url = req.body.url.split(',')[0];
    const category = req.body.url.split(',')[1];
    const genre = `&with_genres=${category}`;

    const data = await fetchExternalData(
      category
        ? `${url}?api_key=${process.env.API_KEY}${category && genre}`
        : `${url}?api_key=${process.env.API_KEY}`,
    );
    if (!data) {
      return res.status(404).json({ error: 'No data found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.banner = async (req, res) => {
  try {
    const url = req.body.url;
    const data = await fetchExternalData(
      `${url}?api_key=${process.env.API_KEY}`,
    );
    if (!data) {
      return res.status(404).json({ error: 'No data found' });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.trailer = async (req, res) => {
  try {
    const url = req.body.url;
    const data = await fetchExternalData(
      `${url}?api_key=${process.env.API_KEY}`,
    );
    if (!data) {
      return res.status(400).json({ error: 'No trailer found' });
    }
    res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error: 'No trailer found' });
  }
};
