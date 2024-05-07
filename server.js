
require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
  origin: process.env.Origin_URL ,
  optionsSuccessStatus: 204,
  methods: "GET, POST, PUT, DELETE",
};
const PORT = process.env.PORT || 3000
// Use cors middleware
app.use(cors(corsOptions));


const productRoutes = require('./routes/productRoutes');

app.use(express.json());

const dbConnect = require("./config/database.config");

const mongoURI = process.env.Mongo_URI;
if (!mongoURI) {
    console.error('MongoDB URI is not provided in environment variables.');
    process.exit(1);
}
dbConnect(mongoURI);


app.use('/api', productRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

