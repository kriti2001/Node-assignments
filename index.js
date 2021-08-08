const http = require("http");
// request = object; response = object GET, PUT, POST, DELETE
///get/items, /add/item, /update/item, /delete/item
http.createServer((request, response) => {
    console.log("request", request.url, request.method);
    if(request.method==="GET" && request.url==="/get/items"){
        console.log("fetching items");
    }else if(request.method==="POST" && request.url==="/add/item"){
        console.log("adding item");
    }else if(request.method==="PUT" && request.url==="/update/item"){
        console.log("updating item");
    }else if(request.method==="DELETE" && request.url==="/delete/item"){
        console.log("deleting item");
    }else{
        console.log("hello world");
    }
}).listen(8080);