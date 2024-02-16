const http = require('http');

const users = [{ id: 1 }, { id: 2 }];

const server = http.createServer((req, res) => {
  // console.log(req, res)

  if (req.method === 'GET') {
    switch (req.url) {
      case '/':
        return res.end('Home');
      case '/users':
        return res.end(JSON.stringify(users));
      default:
        return res.end('no such page');
    }
  } else if (req.method === 'POST') {
    switch (req.url) {
      case '/users':
        let jsonStr = '';
        req.on('data', (chunk) => {
          jsonStr += chunk;
        });
        req.on('end', () => {
          const newUser = JSON.parse(jsonStr);
          newUser.id = Date.now();
          users.push(newUser);
          res.end(JSON.stringify(users));
        });
        break;
      default:
        return res.end('no such page');
    }
  }
});

const PORT = 3000;
server.listen(PORT);
