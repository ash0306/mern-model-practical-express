const http = require('http');
const PORT = 3500;

const server = http.createServer((req,res) => {
    const URL = req.url;
    const METHOD = req.method;
    res.setHeader('Content-Type', 'text/plain');

    if(URL === '/'){
    if(METHOD === 'GET'){
        res.write('GET request');
        res.end();
    }

    else if(METHOD === 'POST'){
        res.write(`POST request`);
        res.end();
    }

    else if(METHOD === 'PUT'){
        res.write(`PUT request`);
        res.end();
    }

    else if(METHOD === 'DELETE'){
        res.write(`DELETE request`);
        res.end();
    }}
    else{
        res.write('Invalid url');
        res.end();
    }
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});