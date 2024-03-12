const path = require('path');
const express = require('express');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Middlewares
app.use(express.json());

app.get('/', (req, res) => {
  return res.render('homePage');
});

app.listen(PORT, () => console.log(`Server started at PORT : ${PORT}`));
