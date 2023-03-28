const http = require( "http");

const books = JSON.stringify([
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Prophet", author: "Kahlil Gibran", year: 1923 }
]);

const authors = JSON.stringify([
    { name: "Paulo Coelho", countryOfBirth: "Brazil", yearOfBirth: 1947 },
    { name: "Kahlil Gibran", countryOfBirth: "Lebanon", yearOfBirth: 1883 }
]);

http.createServer((request, response)=>{
    response.setHeader("Content-Type", "text/html");
    switch (request.url) {
        case "/books":
            response.writeHead(200);
            response.end(books);
            break
        case "/authors":
            response.writeHead(200);
            response.end(authors);
            break
        default:
            response.writeHead(404);
            response.end(JSON.stringify({error:"Resource not found"}));
    }
}).listen(3000);