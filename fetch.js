import fetch from "node-fetch";

fetch('http://localhost:3000/books')
    .then((res)=>res.json())
    .then((err)=>console.log(err))
