const mongoose = require('mongoose');
const express = require('express');
const app = express();
const db = require('./config/keys').mongoURI;
const users = require('./routes/api/users');
const visits = require('./routes/api/visits');
const patients = require('./routes/api/patients');
const bodyParser = require('body-parser');
const passport = require('passport');

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use("/api/visits", visits);
app.use("/api/users", users);
app.use('/api/patients', patients);
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));