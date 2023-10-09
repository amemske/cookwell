const express = require('express');
const app = express();
const sqlite3 = require('sqlite3');
const cors = require('cors')

//middleware function enables Cross-Origin Resource Sharing (CORS) for your Express application
//This allows your Vue.js application to fetch data from the Express API server without being blocked by the browser's same-origin policy
app.use(cors());


// Define routes
app.get('/', (req, res) => {
  res.send('Express Here!!');
});

app.get('/foods', (req, res) => {
    const db = new sqlite3.Database('database.db');
    db.all('SELECT * FROM foods', (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else {
        res.json(rows);
      }
      db.close();
    });
  });

// Assuming `foods` is an array containing food objects

app.get('/foods/:id', (req, res) => {
  const foodId = req.params.id;
  const food = foods.find((item) => item.id === parseInt(foodId));

  if (food) {
    res.json(food);
  } else {
    res.status(404).json({ error: 'Food not found' });
  }
});


// Start the server
const port = 3001; // You can change this port number if needed
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});