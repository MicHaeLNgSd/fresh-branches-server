const express = require('express');
const router = require('./routers');

const app = express();
const PORT = 3000;
const HOST = 'localhost';

// app.get(
//   '/',
//   (req, res, next) => {
//     console.log('home');
//     req.test = 'magic';
//     //res.send('Error'); //- can stop req,res cycle
//     next();
//   },
//   (req, res) => {
//     console.log(req.test);
//     res.send('HOME');
//   }
// );
// app.get('*', (req, res) => {
//   res.send('NOT FOUND');
// });

app.use(express.json());

// app.use('/api', router);
app.use(router);

app.listen(PORT, HOST, () => {
  console.log(`Server started on ${HOST}:${PORT}`);
});
