const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Home Page');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } else if (req.url === '/products') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Products Page');
  }
});

server.listen(3000, () => {
  console.log('Listening on port 3000');
});
