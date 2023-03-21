const http = require('http')


http.createServer((request, response)=>{

    response.setHeader("Content-Type", "text/html");
    response.write("<!DOCTYPE html>");
    response.write("<html lang='ru'></html>");
    response.write("<head><title></title></head>");
    response.write("<title>Hello Node.js</title>");
    response.write("<meta charset=\"utf-8\" />");
    response.write("</head>");
    response.write("<body><h2>Привет миг</h2></body>");
    response.write("</html>");
    response.end(()=>console.log('start server'));
}).listen(3000);
