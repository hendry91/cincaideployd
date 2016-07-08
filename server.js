var deployd = require('deployd');

var server = deployd({
  port: process.env.PORT || 8080,
  env: 'staging',
  db: {
    host: 'ds053894.mongolab.com',
    port: 53894,
    name: 'cincaidb',
    credentials: {
      username: 'hendry91',
      password: 'hendry5203'
    }
  }
});

server.listen();

server.on('listening', function() {
  console.log("Server is listening");
});

server.on('error', function(err) {
  console.error(err);
  process.nextTick(function() { // Give the server a chance to return an error
    process.exit();
  });
});