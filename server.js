const express = require('express');
const router = require('./routers');
const app = express();

const PORT = 3000;
const HOST = 'localhost';

app.use(express.json());
app.use(router);

app.listen(PORT, HOST, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});
