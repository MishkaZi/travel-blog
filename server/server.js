import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import postRouter from './routes/posts.js ';

const app = express();
app.use(bodyParser.json({ limit: '32mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '32mb', extended: true }));
app.use(cors());

app.use('/posts', postRouter);

const connection_url =
  'mongodb+srv://root:1234@cluster0.2pvgi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
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
