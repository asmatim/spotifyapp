
const express = require('express');
const cors = require('cors');
const volleyball = require('volleyball');

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();
const mongoose = require('mongoose');

const userRouter = require('./routes/users');
const songRouter = require('./routes/songs');
const playlistRouter = require('./routes/playlists');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/spotifydb", { useNewUrlParser: true});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.on('open', () => {
    console.log(`[Database] ==> MongoDB is connected!!! <==`);
})

app.use(cors());
app.use(volleyball);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/user", userRouter);
app.use("/api/song", songRouter);
app.use("/api/playlist", playlistRouter)

app.listen(port, () => console.log(`[ Server ] is running on: ${port}`));