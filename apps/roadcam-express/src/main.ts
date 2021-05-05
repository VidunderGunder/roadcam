import * as express from 'express';
import * as fs from 'fs';
import * as cors from 'cors';
import { MongoClient } from 'mongodb';

const uri = process.env.NX_MONGODB_URI;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();
app.use(cors({ origin: /./ }));

app.get('/api/cameras', function (_, res) {
  res.setHeader('Content-Type', 'application/json');
  fs.createReadStream(__dirname + '/assets/cameras.json').pipe(res);
});

app.get('/api/cameras-mongodb', function (_, res) {
  res.setHeader('Content-Type', 'application/json');

  client.connect((error) => {
    if (error) {
      res.status(500);
      throw error;
    }
    const db = client.db('roadcam');
    db.collection('cameras')
      .find({})
      .toArray(function (error, result) {
        if (error) {
          res.status(500);
          throw error;
        }
        const cameras = result[0];
        res.json(cameras);
        client.close();
      });
  });
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
