import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(helmet());
app.use(express.static(__dirname + '/../client/static/'));
app.use(express.static(__dirname + '/../../build/'));

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/static/index.html'));
})

app.listen(process.env.PORT);