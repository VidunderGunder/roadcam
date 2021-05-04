import * as express from 'express';
import * as fs from "fs"
import * as cors from "cors"

const app = express();
app.use(cors({origin: /./}))

app.get('/roadcam.geojson', function(_, res) {
  res.setHeader('Content-Type', 'application/json');
  fs.createReadStream(__dirname + "/assets/cameras.json").pipe(res);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
