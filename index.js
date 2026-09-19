const http = require('http');

http.createServer((req, res) => {
  res.write("Bot is alive!");
  res.end();
}).listen(8080, () => {
  console.log("Keep-alive server is running on port 8080");
});
import './src/app.js';
