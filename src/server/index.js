import 'dotenv/config';
import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(express.static(__dirname + '/../client/static/'));
app.use(express.static(__dirname + '/../client/static/images/'))
app.use(express.static(__dirname + '/../../build/'));

router.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + '/../client/static/index.html'));
});

app.get('/oauth/auth', (req, res) => {
  fetch(`https://api.untappd.com/v4/method_name?client_id=` + process.env.CLIENT_ID + `&client_secret=` + process.env.CLIENT_SECRET)
    .then(data => console.log(data))
});

app.listen(process.env.PORT);