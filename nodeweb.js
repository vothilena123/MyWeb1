var http = require("http");
var fs = require("fs");
var hostname = "localhost";
var port = process.env.PORT || 3000;
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    switch (req.url){
        case "/home" : {
            var data = fs.readFileSync(__dirname + "/home.html", "utf-8");
            res.end(data);
            break;
        }
        case "/about" :{
            var data = fs.readFileSync(__dirname + "/about.html", "utf-8");
            res.end(data);
            break;
        }
        case "/image" :{
            var data = fs.readFileSync(__dirname + "/image.html", "utf-8");
            res.end(data);
            break;
        }
        default : 
            break;
    }
    

}); server.listen(port, //hostname, 
    ()=>{
    console.log (`Server running at  http://${hostname}:${port}/`);
});