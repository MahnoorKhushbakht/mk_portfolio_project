if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const UserModel = require('./src/models/user')
app.use(express.json())
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Allow all origins
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); // Pass control to the next middleware
});

const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE','PATCH'], // Include the PUT method
  allowedHeaders: ['Content-Type'],
};

app.use(cors(corsOptions));

const dbUrl = process.env.REACT_APP_DB_URL
mongoose.connect(dbUrl);

app.post('/contactme', (req, res) => {
    console.log('Received POST request to /contactme');
    console.log('Request body:', req.body);
  
    UserModel.create(req.body)
      .then((users) => {
        console.log('User created:', users);
        res.json(users);
      })
      .catch((err) => {
        console.error('Error creating user:', err);
        res.status(500).json(err);
      });
  });

const port = process.env.REACT_APP_PORT || 3001;

// const port = 3001
  
app.listen(port, () => {
    console.log('Server listening');
  });

