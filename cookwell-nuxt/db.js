const sqlite3 = require('sqlite3').verbose();

// Create a new database
const db = new sqlite3.Database('database.db');

// Create a table for the foods
db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS foods (id INTEGER PRIMARY KEY, name TEXT, ingredients TEXT, instructions TEXT, image TEXT, author TEXT)');

  // Insert the JSON data into the table
  const jsonData = require('./data.json');
  const insertStmt = db.prepare('INSERT INTO foods (id, name, ingredients, instructions, image, author) VALUES (?, ?, ?, ?, ?, ?)');

  jsonData.foods.forEach((food) => { //stringify to convert the array into strings since relational db cannot store arrays
    insertStmt.run(food.id, food.name, JSON.stringify(food.ingredients), food.instructions, food.image, food.author);
  });

  insertStmt.finalize();
});

// Close the database connection
db.close();

