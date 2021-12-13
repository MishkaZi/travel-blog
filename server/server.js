import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

import postRouter from './routes/posts.js ';
import usersRouter from './routes/users.js ';

const app = express();
app.use(bodyParser.json({ limit: '32mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '32mb', extended: true }));
app.use(cors());
dotenv.config();

app.use('/posts', postRouter);
app.use('/users', usersRouter);

const connection_url = process.env.CONNECTION_URL;
const port = process.env.PORT || 3001;

mongoose
  .connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch(() => console.log(err.message));
