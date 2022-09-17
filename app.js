const express = require('express');
const app = express();

//app.get('/',(req,res) => {});
app.get('/',(req,res) => {
    res.send('<h1>Welcome to Express, with github action 101</h1>')
});


app.listen(3001,() => {
    console.log('Server is running at port 3001')
});