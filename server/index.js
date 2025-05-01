const express = require('express');
const app = express();


const port=5000; 
app.get('/', (req, res) => {
    res.send('Hello Express');
})
app.listen(port, ()=>{console.log(`Listening on port ${port}`)});
app.get('/hello', (req, res) => {
    console.log('hello')
    res.json({ message: 'Hello from the backend!' });
  });
