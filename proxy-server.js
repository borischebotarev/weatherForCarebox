const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.json());

// CORS handling middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route to access Tomorrow API
app.get('/get-weather', async (req, res) => {
  try {
    // TODO: move apikey to ENV configuration
    const tomorrowAPIResponse = await axios.get(`https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=GafQV8qonJrDBZeG9LqGgltxmqZKy4pa`);
    res.json(tomorrowAPIResponse.data);
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: 'Failed to fetch data from the Tomorrow API' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
