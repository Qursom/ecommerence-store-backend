require('dotenv').config();

const mongoose = require('mongoose');
const Product = require('./models/product.model');
const fs = require('fs');

const jsonData = fs.readFileSync('db.json', 'utf8');
const seedData = JSON.parse(jsonData);
const mongoURI = process.env.Mongo_URI;
// Connect to MongoDB using the URL from the environment variable
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  // Insert seed data into the database
  await Product.insertMany(seedData.items);
  console.log('Seed data inserted successfully');
  mongoose.connection.close();
});