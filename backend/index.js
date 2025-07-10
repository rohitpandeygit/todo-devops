const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.get('/', (req, res) => {
  res.send('ToDo Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

const corsOptions = {
  origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
