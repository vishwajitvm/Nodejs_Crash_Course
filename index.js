require('dotenv').config();
const express = require('express');
const compression = require('compression');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const admin = require('firebase-admin');
const firebaseConfig = require('./config/firebaseConfig');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: "https://nodejs-rcsm-practice.firebaseio.com"
});

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(compression());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('app is working fine!');
});

sequelize.sync()
  .then(() => {
    app.listen(port, () => console.log(`server listening on port ${port}`));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
