const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRouter = require('./routes/user');  // Import routes

const app = express();

// replace <password> with your actual password
const uri = 'mongodb+srv://mkasalo:LsTPIqFOHcB1vcT7@webapps.cox2ypd.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected…'))
  .catch(err => console.log(err))

app.use(cors({
  origin: 'http://localhost:8080', // This is the URL of your Vue.js application
  credentials: true
}));

app.use(express.json()); // Parse JSON bodies of incoming requests

app.use('/api', userRouter); // Use the routes

app.listen(5000, () => console.log('Server is running on Port: 5000'));
