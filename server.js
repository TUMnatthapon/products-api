const express = require('express');
const app = express();
const products = require('./products')
const user = require('./user')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Products
app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const result = products.find((product) => product.id === id);
  res.json(result);
});

app.post('/products', (req, res) => {
  const payload = req.body;
  res.json(payload);
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ id });
});


//User
app.get('/user', (req, res) => {
  res.json(user);
});

app.post('/user', (req, res) => {
  const payload = req.body;
  res.json(payload);
});

app.put('/products/:id', (req, res) => {
  const payload = req.body;
  res.json(payload);
});

app.delete('/products/:id', (req, res) => {
  const payload = req.body;
  res.json(payload);
});


app.listen(3000, () => {
  console.log('Application is running on port 3000');
});