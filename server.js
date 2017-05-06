const express = require('express');
const path = require('path');

const port = process.env.PORT || 8080;
const app = express();

//node server to serve static files
app.use(express.static(__dirname));
app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port);
console.log('Server Running...');