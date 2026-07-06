import express from 'express';

const app = express();

app.get('/', async (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send('<h1 style="color: #BD2608;">¡Hola Mundo!</h1> <p style="color: #367391; font-style: italic; font-size: 20px">¡Hola desde Node.js dentro de un Dev Container!</p>');
});

app.listen(3001);
console.log(`Server on port 3001`);