const express = require('express')
const app = express()
const port = 3000;
 
app.use((req,res,next) => {
  res.setHeader(
    'Access-Control-Allow-Origin', '*');
    next();
});

app.get('/', (req, res) => {
  res.send('Express + JS');
});

app.get('/Hello', (req, res) => {
    res.send({"text": "Hello World!"})
  })

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
