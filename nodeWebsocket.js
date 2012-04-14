var sys = require("sys"),
path = require("path"),
http = require ("http"),
url = require ("url"),
fs = require("fs"),
debug = require("util"),
events = require("events");
// Library https://github.com/miksago/node-websocket-server
var websocket = require('./node-websocket-server/lib/ws/server');
<!--formatted-->

// create web socket server
var server = websocket.createServer();
// listen on port 8081
server.listen(8081);

server.addListener("connection", function(conn) {
    debug.print ("Client connected\n");
    // when client writes something
    conn.addListener("message", function(message) {
        debug.print ("Got message: " + message + "\n");
        // iterate thorough all connected clients, and push this message
        server.manager.forEach(function(connected_client) {
            debug.print ("sending message to" + connected_client);
            connected_client.write(JSON.stringify(conn.id + ": " + message));
        });
    });
});

server.addListener("request", function(req, res) {
    var uri = url.parse(req.url).pathname;
    load_static_file(uri,res);
});

function load_static_file(uri, response) {
    var filename = path.join(process.cwd(), uri);  
 
    path.exists(filename, function(exists) {
        if(!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write(filename + "404 Not Found\n");
            response.end();
            return;
        }  
 
        fs.readFile(filename, "binary", function(err, file) {
            if(err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }  
 
            response.writeHead(200);
            response.write(file, "binary");
            response.end();
        });
    });
}