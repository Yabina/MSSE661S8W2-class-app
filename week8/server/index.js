const express = require('express');
var fs = require('fs');
var https = require('https');
const app = express();
const cors = require('cors');

app.use(cors({
  origin: "http://localhost:3000"
}));

const httpPort = process.env.PORT || 4000;
const httpsPort = process.env.HTTPS_PORT || 4443;

app.use(express.static('public'));

app.listen(httpPort, () => {
  console.log('Server started at http://localhost:%s', port);
});


app.get("/", function (req, res) {
  res.send("hello world");
});

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + '/server.key'),
      cert: fs.readFileSync(__dirname + '/server.cert'),
      
     
    },
    app
  )
  .listen(httpsPort, () => {
    console.log('Server started at http://localhost:%s', httpsPort);
  });