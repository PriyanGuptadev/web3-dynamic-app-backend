const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const verifyRoute = require('./routes/verifyRoute');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use('/', verifyRoute);

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
