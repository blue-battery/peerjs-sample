var fs = require('fs');
 var PeerServer = require('peer').PeerServer;

var credentials = {
  key: fs.readFileSync('key/rsa_private.key'),
  cert: fs.readFileSync('key/server.crt')
}
// const customGenerationFunction = () => (Math.random().toString(36) + '0000000000000000000').substr(2, 16);
var server = PeerServer({
  host:"13.115.162.229",
  port: 9000,
  ssl: credentials,
  // generateClientId: customGenerationFunction,
  proxied: true,
  path:"/",
  debug: 3,
    // key:"",
  config: {
        'iceServers': [
            { url: 'stun:stun1.l.google.com:19302' },
            {
                url: 'turn:numb.viagenie.ca',
                credential: 'muazkh',
                username: 'webrtc@live.com'
            }
        ]
    }
});

/** 构建html页 */
var https = require('https');
// var http = require('http');
var serveIndex = require('serve-index');
var express = require("express");       
var htmlApp = express();
htmlApp.use(serveIndex('./html'));
htmlApp.use(express.static("./html"))
var httpsServer = https.createServer(credentials, htmlApp);
// var httpsServer = http.createServer(htmlApp);
httpsServer.listen(81, "0.0.0.0");

