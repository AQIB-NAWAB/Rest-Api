
const mongoose = require('mongoose');
const uri = "mongodb+srv://aqibnawab1100:aqibnawab786@data.y5dpgv7.mongodb.net/?retryWrites=true&w=majority";



mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));