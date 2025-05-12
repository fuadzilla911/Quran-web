import axios from 'axios';

export default async function handler(req, res) {
  const { location } = req.query;
  const response = await axios.get(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=halal+${location}&key=${process.env.GOOGLE_API_KEY}`
  );
  res.status(200).json(response.data.results);
}
